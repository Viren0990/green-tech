'use client'

import { useState } from 'react';
import { createPost } from '@/src/actions/posts';
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';

interface SelectedImage {
  file: File;
  preview: string;
}

interface UploadedImage {
  url: string;
  publicId: string;
}

export default function AdminPostForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImages, setSelectedImages] = useState<SelectedImage[]>([]);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Handle image selection (just preview, don't upload yet)
  function handleImageSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Limit to 5 images total
    if (selectedImages.length + files.length > 5) {
      setMessage({ type: 'error', text: 'Maximum 5 images allowed per post.' });
      return;
    }

    setMessage(null);

    // Create preview URLs for selected images
    const newImages: SelectedImage[] = Array.from(files).map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setSelectedImages([...selectedImages, ...newImages]);
    
    // Clear input so same file can be selected again
    e.target.value = '';
  }

  // Remove image from selection
  function removeImage(index: number) {
    const image = selectedImages[index];
    // Revoke preview URL to free memory
    URL.revokeObjectURL(image.preview);
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
    setMessage(null);
  }

  // Upload images to Cloudinary and then create post
  async function handleSubmit(formData: FormData) {
    if (selectedImages.length === 0) {
      setMessage({ type: 'error', text: 'Please select at least one image.' });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      // Step 1: Upload all images to Cloudinary
      const uploadPromises = selectedImages.map(async (selectedImage) => {
        const imageFormData = new FormData();
        imageFormData.append('file', selectedImage.file);
        imageFormData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: 'POST',
            body: imageFormData
          }
        );

        if (!response.ok) {
          throw new Error('Failed to upload image to Cloudinary');
        }

        const data = await response.json();
        return {
          url: data.secure_url,
          publicId: data.public_id
        };
      });

      const uploadedImages: UploadedImage[] = await Promise.all(uploadPromises);

      // Step 2: Add uploaded image URLs to form data
      const imageUrls = uploadedImages.map(img => img.url);
      formData.append('images', JSON.stringify(imageUrls));

      // Step 3: Create post with server action
      const result = await createPost(formData);

      if (result.success) {
        setMessage({ type: 'success', text: 'Post created successfully!' });
        
        // Cleanup: Revoke all preview URLs
        selectedImages.forEach(img => URL.revokeObjectURL(img.preview));
        
        // Reset form
        (document.getElementById('admin-post-form') as HTMLFormElement)?.reset();
        setSelectedImages([]);
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to create post.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage({ 
        type: 'error', 
        text: 'Failed to upload images or create post. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form id="admin-post-form" action={handleSubmit} className="space-y-6">
      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
          Post Title *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition disabled:bg-gray-50 disabled:cursor-not-allowed"
          placeholder="e.g., Laptop Motherboard Repair Project"
        />
      </div>

      {/* Content */}
      <div>
        <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-2">
          Post Content *
        </label>
        <textarea
          id="content"
          name="content"
          required
          rows={6}
          disabled={isSubmitting}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
          placeholder="Describe the project, process, or transformation story..."
        />
      </div>

      {/* Author */}
      <div>
        <label htmlFor="author" className="block text-sm font-semibold text-gray-700 mb-2">
          Author Name *
        </label>
        <input
          type="text"
          id="author"
          name="author"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition disabled:bg-gray-50 disabled:cursor-not-allowed"
          placeholder="Your name"
        />
      </div>

      {/* Image Selection */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Select Images (Max 5) *
        </label>
        
        {/* Select Button */}
        <div className="mb-4">
          <label 
            htmlFor="image-select"
            className={`inline-flex items-center gap-2 px-6 py-3 border-2 border-dashed border-gray-300 rounded-lg transition ${
              selectedImages.length >= 5 || isSubmitting
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:border-green-500 cursor-pointer'
            }`}
          >
            <ImageIcon size={20} />
            <span>Choose Images</span>
          </label>
          <input
            type="file"
            id="image-select"
            accept="image/*"
            multiple
            onChange={handleImageSelect}
            disabled={selectedImages.length >= 5 || isSubmitting}
            className="hidden"
          />
          <p className="text-sm text-gray-500 mt-2">
            {selectedImages.length}/5 images selected
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {isSubmitting 
              ? 'Uploading images...' 
              : 'Images will be uploaded when you click "Publish Post"'
            }
          </p>
        </div>

        {/* Image Preview Grid */}
        {selectedImages.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {selectedImages.map((image, index) => (
              <div key={index} className="relative group">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 border-2 border-gray-200">
                  <img
                    src={image.preview}
                    alt={`Selected ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {isSubmitting && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Loader2 className="animate-spin text-white" size={24} />
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  disabled={isSubmitting}
                  className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        {selectedImages.length === 0 && (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <ImageIcon className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-500 mb-2">No images selected yet</p>
            <p className="text-sm text-gray-400">Click "Choose Images" above to select</p>
          </div>
        )}
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
          Admin Password *
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition disabled:bg-gray-50 disabled:cursor-not-allowed"
          placeholder="Enter admin password"
        />
        <p className="text-sm text-gray-500 mt-1">
          Required for verification
        </p>
      </div>

      {/* Messages */}
      {message && (
        <div className={`p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-50 text-green-700 border border-green-200' 
            : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          {message.text}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || selectedImages.length === 0}
        className="w-full bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-500"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Uploading images & creating post...
          </>
        ) : (
          <>
            <Upload size={20} />
            Publish Post
          </>
        )}
      </button>
    </form>
  );
}

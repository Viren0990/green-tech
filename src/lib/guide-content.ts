import type { Guide } from '@/src/lib/guides';

// Official sources, checked October 2026. Reuse these so every guide links to the same documents.
const SRC = {
  rules2022: {
    label: 'E-Waste (Management) Rules, 2022 — G.S.R. 801(E), 2 November 2022 (CPCB copy of the Gazette notification)',
    url: 'https://cpcb.nic.in/uploads/Projects/E-Waste/e-waste_rules_2022.pdf',
  },
  amend2024: {
    label: 'E-Waste (Management) Amendment Rules, 2024 — G.S.R. 164(E), 8 March 2024 (Gazette of India)',
    url: 'https://egazette.gov.in/writeReadData/2024/252788.pdf',
  },
  mpcbDirectory: {
    label: 'MPCB Circular Economy Directory 2025 — includes authorised electronic waste recyclers in Maharashtra',
    url: 'https://www.mpcb.gov.in/sites/default/files/whats_new/2025-11/MPCB%20Circular%20Economy%20Directory%202025%20R3_compressed.pdf',
  },
  mpcbList2024: {
    label: 'MPCB — Authorised E-Waste Recyclers & Refurbishers, March 2024',
    url: 'https://mpcb.gov.in/sites/default/files/Establishment%20of%20MPCB/Seniority%20list/2014/Authorised_E-Waste_Recyclers_%26_Refurbishers-March-2024.pdf',
  },
  cpcbPortal: {
    label: 'CPCB EPR portal for e-waste (registration of producers, refurbishers and recyclers)',
    url: 'https://eprewastecpcb.in/',
  },
  nist: {
    label: 'NIST Special Publication 800-88 Rev. 2, Guidelines for Media Sanitization (September 2025)',
    url: 'https://csrc.nist.gov/pubs/sp/800/88/r2/final',
  },
  dpdpAct: {
    label: 'Digital Personal Data Protection Act, 2023 — Gazette of India',
    url: 'https://egazette.gov.in/WriteReadData/2023/248045.pdf',
  },
  dpdpRules: {
    label: 'Digital Personal Data Protection Rules, 2025 — G.S.R. 846(E), 13 November 2025 (MeitY)',
    url: 'https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf',
  },
  apple: {
    label: 'Apple Support — What to do before you sell, give away or trade in your iPhone or iPad',
    url: 'https://support.apple.com/en-in/109511',
  },
  android: {
    label: 'Android Help — Reset your Android device to factory settings',
    url: 'https://support.google.com/android/answer/6088915?hl=en',
  },
};

export const guideList: Guide[] = [
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'office-laptop-server-disposal-pune',
    title: 'How Pune offices should dispose of old laptops and servers',
    metaTitle: 'Office Laptop Disposal in Pune',
    description:
      'A step-by-step plan for IT and admin teams: list the devices, wipe the data, hand over only to a registered recycler, and keep the right paperwork.',
    audience: 'Offices',
    published: '2026-10-15',
    updated: '2026-10-15',
    keyPoints: [
      `Make a list of every device first, with serial numbers. It becomes the backbone of your paperwork.`,
      `Wipe or destroy every drive before it leaves your control, and get a record for each device.`,
      `If your company is a **bulk consumer** under the E-Waste (Management) Rules, 2022, you must hand e-waste only to a **registered producer, refurbisher or recycler** (Rule 8).`,
      `Ask for the recycler's registration, a handover receipt that lists serial numbers, and a certificate of sanitisation for each drive.`,
    ],
    body: [
      { type: 'p', text: `Most offices in Pune end up with a cupboard of old laptops, a rack of retired servers and a box of chargers nobody wants. Clearing it is easy. Clearing it in a way you can defend later — to an auditor, a client or your own management — takes a little planning. This guide walks through the steps in order.` },

      { type: 'h2', text: `Step 1: List what you are getting rid of` },
      { type: 'p', text: `Before anything is moved, write down each item. A simple spreadsheet is enough:` },
      { type: 'ul', items: [
        `Device type and model (laptop, desktop, server, switch, printer, phone)`,
        `Serial number and your asset tag, if you use one`,
        `Whether it holds data (laptops, desktops, servers, phones, printers and copiers with internal drives usually do)`,
        `Where the data-bearing parts are (number of drives in a server, removable media)`,
      ] },
      { type: 'p', text: `This list is what you will later match against the recycler's handover receipt and the data-wiping certificates. Without it, you cannot show that every device was accounted for.` },

      { type: 'h2', text: `Step 2: Decide what can be reused` },
      { type: 'p', text: `Some equipment still has life in it. Working laptops can be reassigned internally, donated or sent for refurbishment; dead or very old equipment should go for recycling. Decide this now, because it changes how you treat the data: a drive that will be reused needs to be wiped properly, while a drive that is failing or will be scrapped can simply be destroyed.` },

      { type: 'h2', text: `Step 3: Back up, then remove the device from your systems` },
      { type: 'ul', items: [
        `Copy anything the business still needs, and confirm with the device owner or team lead.`,
        `Remove the device from your device-management tool, domain and any licence or warranty accounts.`,
        `Sign out of user accounts and remove device locks, so a refurbisher can actually reuse it.`,
        `Revoke any certificates, VPN profiles or saved credentials linked to that machine.`,
      ] },

      { type: 'h2', text: `Step 4: Choose how to deal with the data` },
      { type: 'p', text: `The international reference for this is NIST SP 800-88, whose latest revision was published in September 2025. It describes three levels — **clear**, **purge** and **destroy** — and recommends a written record for each device once it is done. Which level you need depends on how sensitive the data is and whether the drive will be reused. Our guide on [wiping versus destroying a hard drive](/guides/hard-drive-wiping-vs-destruction) explains the choice in plain terms.` },
      { type: 'callout', title: `Do not skip this for servers and printers`, text: `Server drives often hold the most sensitive data in the building, and many office printers and copiers keep scanned documents on an internal drive. Include them in the same process as laptops.` },

      { type: 'h2', text: `Step 5: Hand over only to a registered party` },
      { type: 'p', text: `The E-Waste (Management) Rules, 2022 came into force on 1 April 2023. Rule 8 says that **bulk consumers** "shall ensure that e-waste generated by them shall be handed over only to the registered producer, refurbisher or recycler." A bulk consumer is any entity that has used at least 1,000 units of the equipment listed in Schedule I of the rules at any point in a financial year (Rule 3(1)(b)). Many mid-sized and large offices cross that number once you count laptops, monitors, phones, printers and networking gear together.` },
      { type: 'p', text: `Recyclers and refurbishers have to register on the Central Pollution Control Board's online portal, and the rules say no such business may operate without registration (Rule 4). Before you hand anything over:` },
      { type: 'ul', items: [
        `Ask for the recycler's or refurbisher's registration details and keep a copy.`,
        `Check the name against the Maharashtra Pollution Control Board's published lists of authorised e-waste recyclers and refurbishers (linked in the sources below).`,
        `Be wary of informal scrap buyers. The rules allow environmental compensation to be charged to any entity that "aids or abets" a violation (Rule 22(3)).`,
      ] },

      { type: 'h2', text: `Step 6: Collect the paperwork` },
      { type: 'p', text: `The 2022 rules do not require bulk consumers to file returns — that duty sits with manufacturers, producers, refurbishers and recyclers. But you will still want proof that you met Rule 8 and protected your data. Keep these together with your Step 1 list:` },
      { type: 'table', head: ['Document', 'What it shows'], rows: [
        [`Recycler or refurbisher registration`, `You handed over to a registered party, as Rule 8 requires`],
        [`Handover receipt or challan listing serial numbers`, `Exactly which devices left your premises, and when`],
        [`Certificate of sanitisation (one per drive or device)`, `The data was cleared, purged or destroyed, by whom and how`],
        [`Recycling or disposal certificate`, `What finally happened to the material`],
      ] },
      { type: 'p', text: `For a fuller checklist, see [what records to keep when your company disposes of e-waste](/guides/e-waste-rules-2022-business-checklist).` },

      { type: 'h2', text: `Where personal data comes in` },
      { type: 'p', text: `Old devices often hold personal data about employees and customers. Section 8(7) of the Digital Personal Data Protection Act, 2023 requires an organisation to erase personal data once the purpose it was collected for is no longer being served, unless another law requires it to be kept, and to make its data processors do the same. The DPDP Rules, 2025 were notified on 13 November 2025 and bring most obligations into force in stages over the following 18 months. Disposing of devices without wiping them is an easy way to fall foul of this.` },
    ],
    faqs: [
      { question: `Does my company count as a bulk consumer?`, answer: `Under Rule 3(1)(b) of the E-Waste (Management) Rules, 2022, a bulk consumer is any entity that has used at least 1,000 units of the equipment listed in Schedule I at any point in a financial year. Count all your IT, telecom and electrical equipment together, not just laptops.` },
      { question: `Do we have to file an e-waste return as a bulk consumer?`, answer: `Not under the 2022 rules. Rule 8 only requires bulk consumers to hand e-waste to a registered producer, refurbisher or recycler. The quarterly and annual returns on the CPCB portal are filed by manufacturers, producers, refurbishers and recyclers.` },
      { question: `Can we sell old laptops to a local scrap dealer?`, answer: `If you are a bulk consumer, no — Rule 8 says e-waste must go only to a registered producer, refurbisher or recycler. Even if you are not, an unregistered buyer will not give you any record of what happened to the devices or the data on them.` },
      { question: `Is formatting a drive enough before disposal?`, answer: `Usually not. A quick format leaves most data recoverable. Use a proper sanitisation method — see our guide on [wiping versus destroying a hard drive](/guides/hard-drive-wiping-vs-destruction).` },
      { question: `Do the e-waste rules apply to small businesses?`, answer: `Rule 2 says the rules do not apply to micro enterprises as defined in the MSMED Act, 2006. Small and larger businesses are covered, and the bulk consumer duty applies once you cross the 1,000-unit mark.` },
    ],
    sources: [SRC.rules2022, SRC.amend2024, SRC.mpcbDirectory, SRC.mpcbList2024, SRC.nist, SRC.dpdpAct, SRC.dpdpRules],
    related: [
      { label: 'Our services for offices', href: '/what-we-do' },
      { label: 'E-waste items we accept', href: '/e-waste-categories' },
      { label: 'Schedule a pickup', href: '/contact' },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'hard-drive-wiping-vs-destruction',
    title: 'Wiping vs destroying a hard drive: which does your company need?',
    metaTitle: 'Hard Drive Wiping vs Destruction',
    description:
      'Clear, purge or destroy? A plain guide to the three data sanitisation levels in NIST SP 800-88, which one fits your drives, and what proof to ask for.',
    audience: 'Offices',
    published: '2026-10-15',
    updated: '2026-10-15',
    keyPoints: [
      `NIST SP 800-88 Rev. 2 (September 2025) describes three levels of data sanitisation: **clear**, **purge** and **destroy**.`,
      `**Purge** makes recovery infeasible even in a lab while keeping the drive reusable. **Destroy** does the same but leaves the drive unusable.`,
      `Repeated overwriting is an old approach. NIST notes the US Defense Department dropped its overwriting specification in 2006, and says multi-pass overwriting gives very little protection on some drives, such as SSDs.`,
      `Whatever method is used, ask for a **certificate of sanitisation** for each drive.`,
    ],
    body: [
      { type: 'p', text: `When old laptops and servers leave your office, the drives inside them are the real risk. "We formatted them" is not an answer an auditor or a client will accept. The good news is that there is a clear, widely used standard for this, and it boils down to one question: does the drive need to be usable afterwards?` },

      { type: 'h2', text: `The three levels, in plain words` },
      { type: 'p', text: `NIST Special Publication 800-88, Guidelines for Media Sanitization, is the reference most IT teams and auditors use. Its latest revision, Rev. 2, was published in September 2025. It defines three methods:` },
      { type: 'table', head: ['Level', 'What NIST says it does', 'Drive reusable?'], rows: [
        [`**Clear**`, `Uses software to sanitise all the storage a normal user can reach, protecting against "simple, non-invasive data recovery techniques".`, `Yes`],
        [`**Purge**`, `Uses physical or logical techniques to make recovery "infeasible using state-of-the-art laboratory techniques".`, `Yes`],
        [`**Destroy**`, `Makes recovery infeasible with laboratory techniques and leaves the media unable to store data again.`, `No`],
      ] },
      { type: 'p', text: `In practice, **clear** is usually an overwrite with wiping software. **Purge** typically uses the drive's own built-in sanitise or secure-erase commands, or cryptographic erase on encrypted drives. **Destroy** means shredding, crushing, disintegrating or similar.` },

      { type: 'h2', text: `Why "DoD 3-pass" is out of date` },
      { type: 'p', text: `You may still see wiping sold as "DoD 5220.22-M" or "7-pass DoD wipe". NIST Rev. 2 notes that hard drives were often erased this way in the past, but that the US Department of Defense removed its overwriting specification in 2006. It also warns that on some drives — for example SSDs with hidden spare capacity — multiple overwrite passes "should be avoided as very little confidentiality protection is achieved", and that purge or destroy should be used when more assurance is needed.` },
      { type: 'callout', title: `SSDs need different treatment`, text: `Solid-state drives move data around internally and keep spare areas the computer cannot see. Overwriting from the operating system may never touch those areas. For SSDs, use the drive's built-in sanitise or cryptographic erase (purge), or physical destruction.` },

      { type: 'h2', text: `Which one does your company need?` },
      { type: 'table', head: ['Situation', 'Sensible choice'], rows: [
        [`Laptop being reassigned to another employee inside the company`, `Clear is often enough for low-sensitivity data; purge if it held anything confidential`],
        [`Laptop or server leaving the company for refurbishment or resale`, `Purge, so the device can be reused but the data cannot be recovered`],
        [`Drive that is failing, will not respond to erase commands, or cannot be verified`, `Destroy`],
        [`Drives that held highly sensitive data (finance, health, customer records, source code)`, `Purge with verification, or destroy, according to your own policy`],
      ] },
      { type: 'p', text: `NIST leaves the final choice to each organisation's policy, based on how sensitive the data is. If you do not have a written policy yet, the table above is a reasonable starting point to agree with your IT and compliance leads.` },

      { type: 'h2', text: `Check that it worked` },
      { type: 'p', text: `NIST says sanitisation results "should be inspected to verify that the sanitization technique was completed successfully". For wiping, that usually means a verification report from the software. For destruction, it can be a witness, photographs or video of the drives being destroyed, with serial numbers recorded.` },

      { type: 'h2', text: `Ask for a certificate for each drive` },
      { type: 'p', text: `NIST recommends that "a certificate of sanitization … should be completed for each ISM [information storage media] that has been sanitized". A useful certificate records at least:` },
      { type: 'ul', items: [
        `Device and drive make, model and serial number`,
        `The method and level used (clear, purge or destroy) and the tool or equipment`,
        `Whether the result was verified, and how`,
        `Date, location, and the name of the person who carried it out`,
      ] },
      { type: 'p', text: `Match these certificates against your own list of devices. Our guide on [disposing of office laptops and servers](/guides/office-laptop-server-disposal-pune) covers the rest of the process.` },
    ],
    faqs: [
      { question: `Is a quick format or "reset this PC" enough?`, answer: `A quick format only removes the index to the files, so most data can be recovered with free tools. A full reset on a modern, encrypted laptop is better, but you still need a record showing what was done. For devices leaving your company, use a purge-level method or destruction and get a certificate.` },
      { question: `Is physical destruction always safer than wiping?`, answer: `Both purge and destroy aim to make recovery infeasible with laboratory techniques. Destruction is the right choice for failed drives or the most sensitive data, but it rules out reuse. Purge lets a working device be refurbished, which is better for the environment.` },
      { question: `Does NIST still recommend multiple overwrite passes?`, answer: `No. NIST SP 800-88 Rev. 2 describes multi-pass overwriting as a past practice, notes the US DoD removed its overwriting specification in 2006, and warns it gives very little protection on some drives such as SSDs.` },
      { question: `What about phones and tablets?`, answer: `Use the official erase option: Apple's Erase All Content and Settings, or Android's factory reset, which Google says erases all your data from the phone. Remove accounts and device locks first so the device can be reused, and record which devices were reset. Our [home e-waste guide](/guides/recycle-old-electronics-at-home-pune) has the steps.` },
    ],
    sources: [SRC.nist],
    related: [
      { label: 'Data sanitisation at DMD GreenTech Revive', href: '/what-we-do#data-sanitization' },
      { label: 'Schedule a pickup', href: '/contact' },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'e-waste-rules-2022-business-checklist',
    title: 'E-Waste (Management) Rules, 2022: what your business must do and what to keep on file',
    metaTitle: 'E-Waste Rules 2022 for Businesses',
    description:
      'What the 2022 e-waste rules actually require of an ordinary business, which items they cover, and the records worth keeping when you dispose of e-waste.',
    audience: 'Offices',
    published: '2026-10-15',
    updated: '2026-10-15',
    keyPoints: [
      `The E-Waste (Management) Rules, 2022 were notified on 2 November 2022 and came into force on 1 April 2023, replacing the 2016 rules.`,
      `For an ordinary business that uses electronics, the key duty is Rule 8: if you are a **bulk consumer**, hand e-waste only to a **registered producer, refurbisher or recycler**.`,
      `The rules do not ask bulk consumers to file returns, but keeping a simple record of each disposal is the easiest way to show you complied.`,
      `Waste batteries, packaging plastics, radioactive waste and micro enterprises fall outside these rules (Rule 2).`,
    ],
    body: [
      { type: 'p', text: `Most writing about India's e-waste rules is aimed at manufacturers and brand owners, who carry the heaviest obligations. If you run an office, a school, a hospital or a factory that simply uses electronics, your duties are much narrower — but they are real. This guide sets out what applies to you, in plain words, with the rule numbers so you can check.` },

      { type: 'h2', text: `The rules in one paragraph` },
      { type: 'p', text: `The E-Waste (Management) Rules, 2022 (G.S.R. 801(E)) were notified on 2 November 2022 and came into force on 1 April 2023, replacing the E-Waste (Management) Rules, 2016. They have since been amended in January 2023, July 2023 and March 2024; none of those amendments changed the duty of bulk consumers. Most of the rules deal with manufacturers, producers, refurbishers and recyclers, who must register on the Central Pollution Control Board's portal and meet extended producer responsibility targets.` },

      { type: 'h2', text: `Are you a "bulk consumer"?` },
      { type: 'p', text: `Rule 3(1)(b) defines a bulk consumer as "any entity which has used at least one thousand units of electrical and electronic equipment listed in Schedule I, at any point of time in the particular Financial Year", and it includes e-retailers. Count everything on the Schedule I list — laptops, desktops, monitors, phones, printers, routers, UPS units, air conditioners and so on — not just computers.` },

      { type: 'h2', text: `Your one legal duty: Rule 8` },
      { type: 'callout', title: `Rule 8 — Responsibilities of bulk consumer`, text: `"Bulk consumers of electrical and electronic equipment listed in Schedule I shall ensure that e-waste generated by them shall be handed over only to the registered producer, refurbisher or recycler."` },
      { type: 'p', text: `That is the whole of it. In practice it means:` },
      { type: 'ul', items: [
        `Before handing anything over, confirm the receiver is registered as a producer, refurbisher or recycler. Rule 4 says these entities may not carry on business without registration on the CPCB portal.`,
        `Cross-check the name against the Maharashtra Pollution Control Board's published lists of authorised e-waste recyclers and refurbishers.`,
        `Do not sell or give e-waste to informal scrap buyers. Rule 22(3) lets environmental compensation be levied on unregistered operators "and any entity which aids or abets the violation of these rules", and Rule 23 allows prosecution under the Environment (Protection) Act, 1986.`,
      ] },

      { type: 'h2', text: `What the rules cover: Schedule I` },
      { type: 'p', text: `Schedule I lists seven categories of equipment. You can see the items we collect under each one on our [e-waste categories page](/e-waste-categories).` },
      { type: 'ol', items: [
        `Information technology and telecommunication equipment`,
        `Consumer electrical and electronics and photovoltaic panels`,
        `Large and small electrical and electronic equipment`,
        `Electrical and electronic tools (except large-scale stationary industrial tools)`,
        `Toys, leisure and sports equipment`,
        `Medical devices (except all implanted and infected products)`,
        `Laboratory instruments`,
      ] },

      { type: 'h2', text: `What the rules do not cover` },
      { type: 'p', text: `Rule 2 says the rules do not apply to:` },
      { type: 'ul', items: [
        `Waste batteries, which are covered by the Battery Waste Management Rules, 2022`,
        `Packaging plastics, covered by the Plastic Waste Management Rules, 2016`,
        `Micro enterprises as defined in the Micro, Small and Medium Enterprises Development Act, 2006`,
        `Radioactive waste covered by the Atomic Energy Act, 1962`,
      ] },

      { type: 'h2', text: `What to keep on file` },
      { type: 'p', text: `The 2022 rules do not require bulk consumers to keep specific registers or file returns; those duties fall on manufacturers, producers, refurbishers and recyclers. But if anyone asks whether you met Rule 8 — an auditor, a client's vendor-risk team, or the pollution control board — you will want to show it quickly. We suggest keeping this pack for every disposal:` },
      { type: 'table', head: ['Keep this', 'Why'], rows: [
        [`Your own list of the items disposed of, with serial numbers`, `Shows what left the business and lets you match it against other documents`],
        [`A copy of the receiver's registration`, `Shows you handed over to a registered producer, refurbisher or recycler (Rule 8)`],
        [`The handover receipt or challan, signed and dated`, `Shows when the items were handed over, and to whom`],
        [`Certificates of data sanitisation for devices that held data`, `Shows that personal and business data was erased or destroyed`],
        [`The recycling or disposal certificate from the receiver`, `Closes the loop on what happened to the material`],
      ] },
      { type: 'p', text: `If the equipment held personal data about employees or customers, the Digital Personal Data Protection Act, 2023 adds a separate reason to keep sanitisation records: Section 8(7) requires organisations to erase personal data once it is no longer needed for its purpose. See our guide on [wiping versus destroying a hard drive](/guides/hard-drive-wiping-vs-destruction).` },
    ],
    faqs: [
      { question: `When did the E-Waste (Management) Rules, 2022 come into force?`, answer: `On 1 April 2023. They were notified on 2 November 2022 as G.S.R. 801(E) and replaced the E-Waste (Management) Rules, 2016.` },
      { question: `What is a bulk consumer of e-waste?`, answer: `Under Rule 3(1)(b), any entity that has used at least 1,000 units of the equipment listed in Schedule I at any point in a financial year. E-retailers are included.` },
      { question: `Do bulk consumers have to file annual returns?`, answer: `No. Under the 2022 rules, returns on the CPCB portal are filed by manufacturers, producers, refurbishers and recyclers. A bulk consumer's duty under Rule 8 is to hand e-waste only to a registered producer, refurbisher or recycler.` },
      { question: `Are batteries covered by the e-waste rules?`, answer: `No. Rule 2 excludes waste batteries, which fall under the Battery Waste Management Rules, 2022.` },
      { question: `How can I check that a recycler is genuine?`, answer: `Ask for its registration details and compare the name with the Maharashtra Pollution Control Board's published lists of authorised e-waste recyclers and refurbishers, linked in the sources on this page.` },
    ],
    sources: [SRC.rules2022, SRC.amend2024, SRC.cpcbPortal, SRC.mpcbDirectory, SRC.mpcbList2024, SRC.dpdpAct],
    related: [
      { label: 'How Pune offices should dispose of old laptops and servers', href: '/guides/office-laptop-server-disposal-pune' },
      { label: 'E-waste items we accept', href: '/e-waste-categories' },
      { label: 'Schedule a pickup', href: '/contact' },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'recycle-old-electronics-at-home-pune',
    title: 'How to recycle old phones, laptops and appliances from home in Pune',
    metaTitle: 'Recycle Old Electronics in Pune',
    description:
      'Clearing out old phones, laptops or appliances in Pune? How to erase your data, what to do with batteries, and how to make sure it reaches a real recycler.',
    audience: 'Homes',
    published: '2026-10-15',
    updated: '2026-10-15',
    keyPoints: [
      `Back up, sign out of your accounts, then erase the device using the official reset option. Do it in that order.`,
      `Take out SIM cards and memory cards before handing a phone over.`,
      `Loose batteries are covered by separate rules, so keep them apart from your other e-waste. Never puncture or crush a swollen battery.`,
      `Give e-waste to a registered recycler or refurbisher, not a scrap buyer who will strip it for parts.`,
    ],
    body: [
      { type: 'p', text: `Most Pune homes have a drawer of old phones, a laptop that no longer charges and a mixer or two that stopped working years ago. These are worth recycling properly: they contain metals that can be recovered and materials that should not end up in a landfill. Here is how to do it safely.` },

      { type: 'h2', text: `What counts as e-waste` },
      { type: 'p', text: `Almost anything with a plug, a battery or a circuit board. India's E-Waste (Management) Rules, 2022 group it into seven categories, from phones and laptops to TVs, fridges, washing machines, power tools, electronic toys and some medical and lab equipment. See the full list on our [items we accept](/e-waste-categories) page.` },

      { type: 'h2', text: `Step 1: Back up what you want to keep` },
      { type: 'p', text: `Photos, contacts, chats and documents first. Once a device is erased, nobody — including us — can bring the data back.` },

      { type: 'h2', text: `Step 2: Erase your phone or tablet` },
      { type: 'h3', text: `iPhone or iPad` },
      { type: 'p', text: `Apple's own steps, in short:` },
      { type: 'ol', items: [
        `Back up the device.`,
        `Unpair your Apple Watch if you have one.`,
        `Sign out of iCloud and the App Store (Settings, tap your name, then Sign Out).`,
        `Go to Settings > General > Transfer or Reset, then tap **Erase All Content and Settings**. If you use an eSIM, choose to erase it too.`,
      ] },
      { type: 'p', text: `Apple notes that erasing the device turns off Find My and Activation Lock, and does not delete your content from iCloud.` },
      { type: 'h3', text: `Android phone or tablet` },
      { type: 'ol', items: [
        `Make sure your data is backed up to your Google Account.`,
        `Check which Google Account is on the phone (Settings > Accounts) and that you know its password.`,
        `Sign out of your Google Account and any phone-maker account (for example a Samsung account), so the next person can set the phone up.`,
        `Run the factory reset from Settings. Google says it "erases all your data from your phone". Menu names vary by brand, so check your phone maker's help page if you cannot find it.`,
      ] },
      { type: 'p', text: `Finally, take out the **SIM card** and any **memory card**. A memory card is not erased by a phone reset.` },

      { type: 'h2', text: `Step 3: Laptops and computers` },
      { type: 'ul', items: [
        `Copy your files to another device or cloud storage.`,
        `Sign out of your email, browser, cloud storage and any app accounts.`,
        `Use the built-in reset option that removes everything (on Windows, "Reset this PC" with the option to remove everything; on a Mac, Erase All Content and Settings where available).`,
        `If the computer will not switch on, tell the recycler so the drive can be wiped or destroyed for you.`,
      ] },

      { type: 'h2', text: `Step 4: Keep batteries separate` },
      { type: 'p', text: `Waste batteries are covered by the Battery Waste Management Rules, 2022, not the e-waste rules, so they are handled separately. Leave batteries that are built into a device where they are. If you have loose batteries, keep them apart, tape over the terminals, and never puncture, crush or heat a swollen battery — it can catch fire.` },

      { type: 'h2', text: `Step 5: Give it to a registered recycler` },
      { type: 'p', text: `An informal scrap buyer may break a device open for its valuable parts and discard the rest, with no record of what happened to it or the data inside. A registered recycler or refurbisher has to meet the rules for processing the whole device. The Maharashtra Pollution Control Board publishes lists of authorised e-waste recyclers and refurbishers, linked below, so you can check a name before you hand anything over.` },
      { type: 'p', text: `If you are in Pune, you can [schedule a pickup with us](/contact) and we will collect your e-waste from your door.` },
    ],
    faqs: [
      { question: `Do I have to recycle e-waste by law as a household?`, answer: `The E-Waste (Management) Rules, 2022 place their duties on producers, manufacturers, refurbishers, recyclers and bulk consumers, not on individual households. Recycling properly is still the right thing to do, and it protects your data.` },
      { question: `Is a factory reset enough to protect my data?`, answer: `For modern phones, yes — if you use the official option. Apple's "Erase All Content and Settings" and Android's factory reset erase your data. Remove your accounts first, and take out the SIM card and memory card, which a reset does not wipe.` },
      { question: `Can I put old batteries in with my e-waste?`, answer: `Keep loose batteries separate. They are covered by the Battery Waste Management Rules, 2022, not the e-waste rules. Batteries built into a phone or laptop can stay in the device.` },
      { question: `What happens to my old phone after recycling?`, answer: `Working devices may be refurbished and reused. Others are dismantled so that metals and plastics can be recovered and hazardous parts treated safely.` },
    ],
    sources: [SRC.rules2022, SRC.apple, SRC.android, SRC.mpcbDirectory, SRC.mpcbList2024],
    related: [
      { label: 'E-waste items we accept', href: '/e-waste-categories' },
      { label: 'Schedule a pickup in Pune', href: '/contact' },
      { label: 'Common questions about e-waste', href: '/#faq' },
    ],
  },
];

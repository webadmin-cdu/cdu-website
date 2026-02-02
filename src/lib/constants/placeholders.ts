// Real Unsplash images for production use
// All images are free for commercial use under the Unsplash License

export const PLACEHOLDER_IMAGES = {
  // Hero images (1920x1080)
  hero: {
    campus:
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop&q=80', // University building
    students:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080&fit=crop&q=80', // Students studying together
    graduation:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop&q=80', // Graduation ceremony
    library:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1920&h=1080&fit=crop&q=80', // Library interior
  },

  // Section backgrounds (1600x900)
  sections: {
    academics:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&h=900&fit=crop&q=80', // Classroom lecture
    research:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1600&h=900&fit=crop&q=80', // Research laboratory
    sports:
      'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1600&h=900&fit=crop&q=80', // Sports stadium
    events:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&h=900&fit=crop&q=80', // Event celebration
  },

  // Card images (800x600)
  cards: {
    engineering:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop&q=80', // Engineering workshop
    pharmacy:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80', // Pharmacy/medical
    management:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80', // Business meeting
    sciences:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80', // Science technology
    humanities:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&q=80', // Books/literature
    computer:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&q=80', // Computer/coding
  },

  // Faculty/People (400x400, square)
  people: {
    chancellor:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80', // Professional male portrait
    viceChancellor:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80', // Professional male portrait
    registrar:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80', // Professional female portrait
    dean1:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80', // Business professional
    dean2:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80', // Business professional female
    faculty1:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80', // Female professional
    faculty2:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&q=80', // Male professional
    faculty3:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80', // Male portrait
    student1:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&q=80', // Young female student
    student2:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80', // Young male student
    student3:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80', // Young female student
  },

  // Gallery images (various sizes)
  gallery: {
    event1:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&q=80', // Conference event
    event2:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=800&fit=crop&q=80', // Event stage
    event3:
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop&q=80', // Event crowd
    campus1:
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&q=80', // Campus walkway
    campus2:
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=800&fit=crop&q=80', // Students on campus
    lab1:
      'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?w=800&h=600&fit=crop&q=80', // Laboratory
    lab2:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop&q=80', // Science lab
    sports1:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop&q=80', // Sports field
    cultural1:
      'https://images.unsplash.com/photo-1511376777868-611b54f68947?w=800&h=600&fit=crop&q=80', // Cultural performance
    cultural2:
      'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=600&h=800&fit=crop&q=80', // Dance performance
  },

  // Logos (use solid color placeholders)
  logos: {
    company: (name: string) =>
      `https://placehold.co/200x80/1A365D/FFFFFF?text=${encodeURIComponent(name)}`,
  },

  // News thumbnails (600x400)
  news: {
    default:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop&q=80', // News/newspaper
    academic:
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop&q=80', // Students in classroom
    event:
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop&q=80', // Conference event
    achievement:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop&q=80', // Graduation caps thrown
  },

  // Open Graph / Social (1200x630)
  og: {
    default:
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=630&fit=crop&q=80', // University building
  },
};

// Helper function to get random placeholder from Unsplash
export const getRandomPlaceholder = (width: number, height: number) =>
  `https://images.unsplash.com/photo-1562774053-701939374585?w=${width}&h=${height}&fit=crop&q=80`;

// Helper for seeded consistent images (kept for compatibility)
export const getSeededPlaceholder = (
  seed: string,
  width: number,
  height: number
) => {
  // Map common seeds to specific Unsplash images for consistency
  const seedMap: Record<string, string> = {
    campus: 'photo-1562774053-701939374585',
    graduation: 'photo-1523050854058-8df90110c9f1',
    library: 'photo-1507842217343-583bb7270b66',
    engineering: 'photo-1581092160607-ee22621dd758',
    pharmacy: 'photo-1576091160550-2173dba999ef',
    management: 'photo-1552664730-d307ca884978',
    sciences: 'photo-1581091226825-a6a2a5aee158',
    computer: 'photo-1517694712202-14dd9538aa97',
    sports: 'photo-1571260899304-425eee4c7efc',
    events: 'photo-1492684223066-81342ee5ff30',
    research: 'photo-1532094349884-543bc11b234d',
    academics: 'photo-1524178232363-1fb2b075b655',
    students: 'photo-1523240795612-9a054b0db644',
    cse: 'photo-1517694712202-14dd9538aa97',
    ece: 'photo-1518770660439-4636190af475',
    eee: 'photo-1581092918056-0c4c3acd3789',
    civil: 'photo-1504307651254-35680f356dfd',
    mechanical: 'photo-1581092160607-ee22621dd758',
    mba: 'photo-1552664730-d307ca884978',
    nursing: 'photo-1576091160550-2173dba999ef',
    agriculture: 'photo-1500382017468-9049fed747ef',
    biotech: 'photo-1532187863486-abf9dbad1b69',
    biochem: 'photo-1532094349884-543bc11b234d',
    micro: 'photo-1581093458791-9f3c3250a8b0',
    chemistry: 'photo-1581091226825-a6a2a5aee158',
    physio: 'photo-1571019613454-1cb2f99b2d8b',
    mlt: 'photo-1581093458791-9f3c3250a8b0',
    radiology: 'photo-1559757175-5700dde675bc',
  };

  const photoId = seedMap[seed.toLowerCase()] || 'photo-1562774053-701939374585';
  return `https://images.unsplash.com/${photoId}?w=${width}&h=${height}&fit=crop&q=80`;
};

/**
 * Local image registry for universities.
 *
 * Maps a *normalised* university name (lowercase, parenthetical suffixes
 * stripped) to its local /public campus image and logo paths.
 *
 * Used by mapBackendUniversity() as the first-preference image source
 * before falling back to Unsplash placeholder images.
 */

interface LocalUniversityImages {
  campusPhoto: string;
  logo?: string;
}

/** Normalise a university name for lookup-key comparison. */
export function normaliseUniversityName(name: string): string {
  return name
    .toLowerCase()
    // Remove parenthetical abbreviations e.g. "(IITB)", "(NTU)", "(UM)"
    .replace(/\s*\([^)]{1,10}\)\s*/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

/**
 * Registry keyed by the normalised university name.
 * Add new entries here whenever images are added to /public/university_images/.
 */
const LOCAL_IMAGES: Record<string, LocalUniversityImages> = {
  // ── China ──────────────────────────────────────────────────────────────────
  "tsinghua university": {
    campusPhoto: "/university_images/China/Tsinghua University image.jpg",
    logo: "/university_images/China/Tsinghua University logo.jpg",
  },
  "peking university": {
    campusPhoto: "/university_images/China/Peking University image.jpg",
    logo: "/university_images/China/Peking University logo.jpg",
  },
  "fudan university": {
    campusPhoto: "/university_images/China/Fudan University image.jpg",
    logo: "/university_images/China/Fudan University logo.jpg",
  },
  "zhejiang university": {
    campusPhoto: "/university_images/China/Zhejiang University image.jpg",
    logo: "/university_images/China/Zhejiang University logo.jpg",
  },
  "university of science and technology of china": {
    campusPhoto: "/university_images/China/University of Science and Technology of China image.jpg",
    logo: "/university_images/China/University of Science and Technology of China logo.jpg",
  },
  "nankai university": {
    campusPhoto: "/university_images/China/Nankai University image.jpg",
    logo: "/university_images/China/Nankai University logo.jpg",
  },
  "wuhan university": {
    campusPhoto: "/university_images/China/Wuhan University image.jpg",
    logo: "/university_images/China/Wuhan University logo.jpg",
  },
  // CUHK Shenzhen — multiple backend name variants
  "cuhk shenzhen": {
    campusPhoto: "/university_images/China/CUHK Shenzhen image.jpg",
    logo: "/university_images/China/CUHK Shenzhen logo.jpg",
  },
  "the chinese university of hong kong, shenzhen": {
    campusPhoto: "/university_images/China/CUHK Shenzhen image.jpg",
    logo: "/university_images/China/CUHK Shenzhen logo.jpg",
  },
  "chinese university of hong kong shenzhen": {
    campusPhoto: "/university_images/China/CUHK Shenzhen image.jpg",
    logo: "/university_images/China/CUHK Shenzhen logo.jpg",
  },
  "tsinghua shenzhen international graduate school": {
    campusPhoto: "/university_images/China/Tsinghua Shenzhen International Graduate School image.jpg",
    logo: "/university_images/China/Tsinghua Shenzhen International Graduate School logo.jpg",
  },

  // ── Hong Kong ───────────────────────────────────────────────────────────────
  "the university of hong kong": {
    campusPhoto: "/university_images/Hong-kong/The University of Hong Kong image.jpg",
    logo: "/university_images/Hong-kong/The University of Hong Kong logo.jpg",
  },
  "university of hong kong": {
    campusPhoto: "/university_images/Hong-kong/The University of Hong Kong image.jpg",
    logo: "/university_images/Hong-kong/The University of Hong Kong logo.jpg",
  },
  "the chinese university of hong kong": {
    campusPhoto: "/university_images/Hong-kong/The Chinese University of Hong Kong image.jpg",
    logo: "/university_images/Hong-kong/The Chinese University of Hong Kong logo.jpg",
  },
  "chinese university of hong kong": {
    campusPhoto: "/university_images/Hong-kong/The Chinese University of Hong Kong image.jpg",
    logo: "/university_images/Hong-kong/The Chinese University of Hong Kong logo.jpg",
  },

  // ── India ──────────────────────────────────────────────────────────────────
  "indian institute of technology bombay": {
    campusPhoto: "/university_images/India/IIT BOMBAY image.jpg",
    logo: "/university_images/India/IIT BOMBAY logo.jpg",
  },
  "iit bombay": {
    campusPhoto: "/university_images/India/IIT BOMBAY image.jpg",
    logo: "/university_images/India/IIT BOMBAY logo.jpg",
  },
  "indian institute of technology delhi": {
    campusPhoto: "/university_images/India/IIT Delhi image.jpg",
    logo: "/university_images/India/IIT Delhi logo.jpg",
  },
  "iit delhi": {
    campusPhoto: "/university_images/India/IIT Delhi image.jpg",
    logo: "/university_images/India/IIT Delhi logo.jpg",
  },
  "indian institute of science": {
    campusPhoto: "/university_images/India/indian institute of science image.jpg",
    logo: "/university_images/India/indian institute of science logo.jpg",
  },
  "indian institute of science bangalore": {
    campusPhoto: "/university_images/India/indian institute of science image.jpg",
    logo: "/university_images/India/indian institute of science logo.jpg",
  },

  // ── Indonesia ──────────────────────────────────────────────────────────────
  "universitas indonesia": {
    campusPhoto: "/university_images/Indonesia/Universitas Indonesia image.jpg",
    logo: "/university_images/Indonesia/Universitas Indonesia logo.jpg",
  },
  "universitas gadjah mada": {
    campusPhoto: "/university_images/Indonesia/Universitas Gadjah Mada image.jpg",
    logo: "/university_images/Indonesia/Universitas Gadjah Mada logo.jpg",
  },

  // ── Japan ──────────────────────────────────────────────────────────────────
  "the university of tokyo": {
    campusPhoto: "/university_images/Japan/The University of Tokyo image.jpg",
    logo: "/university_images/Japan/The University of Tokyo logo.jpg",
  },
  "university of tokyo": {
    campusPhoto: "/university_images/Japan/The University of Tokyo image.jpg",
    logo: "/university_images/Japan/The University of Tokyo logo.jpg",
  },
  "kyoto university": {
    campusPhoto: "/university_images/Japan/Kyoto University image.jpg",
    logo: "/university_images/Japan/Kyoto University logo.jpg",
  },
  "osaka university": {
    campusPhoto: "/university_images/Japan/Osaka University image.jpg",
    logo: "/university_images/Japan/Osaka University logo.jpg",
  },
  "hokkaido university": {
    campusPhoto: "/university_images/Japan/Hokkaido University image.jpg",
    logo: "/university_images/Japan/Hokkaido University logo.jpg",
  },
  "kyushu university": {
    campusPhoto: "/university_images/Japan/Kyushu University image.jpg",
    logo: "/university_images/Japan/Kyushu University logo.jpg",
  },
  "saitama university": {
    campusPhoto: "/university_images/Japan/Saitama University image.jpg",
    logo: "/university_images/Japan/Saitama University logo.jpg",
  },
  "university of tsukuba": {
    campusPhoto: "/university_images/Japan/University of Tsukuba image.jpg",
    logo: "/university_images/Japan/University of Tsukuba logo.jpg",
  },
  // Tokyo Tech merged with Tokyo Medical and Dental University in 2024 → "Institute of Science Tokyo"
  "tokyo institute of technology": {
    campusPhoto: "/university_images/Japan/Tokyo Institute of Technolog image.jpg",
    logo: "/university_images/Japan/Tokyo Institute of Technolog logo.jpg",
  },
  "institute of science tokyo": {
    campusPhoto: "/university_images/Japan/Tokyo Institute of Technolog image.jpg",
    logo: "/university_images/Japan/Tokyo Institute of Technolog logo.jpg",
  },

  // ── Malaysia ───────────────────────────────────────────────────────────────
  "universiti malaya": {
    campusPhoto: "/university_images/Malaysia/Universiti Malaya image.jpg",
    logo: "/university_images/Malaysia/Universiti Malaya logo.jpg",
  },

  // ── Singapore ──────────────────────────────────────────────────────────────
  "national university of singapore": {
    campusPhoto: "/university_images/Singapore/National University of Singapore image.jpg",
    logo: "/university_images/Singapore/National University of Singapore logo.jpg",
  },
  "nanyang technological university": {
    campusPhoto: "/university_images/Singapore/Nanyang Technological University image.jpg",
    logo: "/university_images/Singapore/Nanyang Technological University logo.jpg",
  },

  // ── South Korea ────────────────────────────────────────────────────────────
  "seoul national university": {
    campusPhoto: "/university_images/South-Korea/Seoul National University image.jpg",
    logo: "/university_images/South-Korea/Seoul National University logo.jpg",
  },
  "kaist": {
    campusPhoto: "/university_images/South-Korea/KAIST image.jpg",
    logo: "/university_images/South-Korea/KAIST logo.jpg",
  },
  "korea advanced institute of science and technology": {
    campusPhoto: "/university_images/South-Korea/KAIST image.jpg",
    logo: "/university_images/South-Korea/KAIST logo.jpg",
  },
  "yonsei university": {
    campusPhoto: "/university_images/South-Korea/Yonsei University image.jpg",
    logo: "/university_images/South-Korea/Yonsei University logo.jpg",
  },
  "korea university": {
    campusPhoto: "/university_images/South-Korea/Korea University image.jpg",
    logo: "/university_images/South-Korea/Korea University logo.jpg",
  },

  // ── Taiwan ─────────────────────────────────────────────────────────────────
  "national taiwan university": {
    campusPhoto: "/university_images/Taiwan/National Taiwan University image.jpg",
    logo: "/university_images/Taiwan/National Taiwan University logo.jpg",
  },

  // ── Thailand ───────────────────────────────────────────────────────────────
  "chulalongkorn university": {
    campusPhoto: "/university_images/Thailand/Chulalongkorn University image.jpg",
    logo: "/university_images/Thailand/Chulalongkorn University logo.jpg",
  },
  "mahidol university": {
    campusPhoto: "/university_images/Thailand/Mahidol University image.jpg",
    logo: "/university_images/Thailand/Mahidol University logo.jpg",
  },

  // ── Uzbekistan ─────────────────────────────────────────────────────────────
  "tashkent medical academy": {
    campusPhoto: "/university_images/Uzbekistan/Tashkent Medical Academy image.jpg",
    logo: "/university_images/Uzbekistan/Tashkent Medical Academy logo.jpg",
  },
  "fergana state university medical centre": {
    campusPhoto: "/university_images/Uzbekistan/Fergana State University Medical Centre image.jpg",
    logo: "/university_images/Uzbekistan/Fergana State University Medical Centre logo.jpg",
  },
  "samarkand state medical university": {
    campusPhoto: "/university_images/Uzbekistan/Samarkand State Medical University image.jpg",
    logo: "/university_images/Uzbekistan/Samarkand State Medical University logo.jpg",
  },
  "tashkent pediatric medical institute": {
    campusPhoto: "/university_images/Uzbekistan/Tashkent Pediatric Medical Institute image.jpg",
    logo: "/university_images/Uzbekistan/Tashkent Pediatric Medical Institute logo.jpg",
  },
  "bukhara state medical institute": {
    campusPhoto: "/university_images/Uzbekistan/Bukhara State Medical Institute image.jpg",
    logo: "/university_images/Uzbekistan/Bukhara State Medical Institute logo.jpg",
  },
  "national university of uzbekistan": {
    campusPhoto: "/university_images/Uzbekistan/National University of Uzbekistan image.jpg",
    logo: "/university_images/Uzbekistan/National University of Uzbekistan logo.jpg",
  },
  "tashkent state technical university": {
    campusPhoto: "/university_images/Uzbekistan/Tashkent State Technical University image.jpg",
    logo: "/university_images/Uzbekistan/Tashkent State Technical University logo.jpg",
  },
  "webster university in tashkent": {
    campusPhoto: "/university_images/Uzbekistan/Webster University in Tashkent image.jpg",
    logo: "/university_images/Uzbekistan/Webster University in Tashkent logo.jpg",
  },
  "fergana polytechnic institute": {
    campusPhoto: "/university_images/Uzbekistan/Fergana Polytechnic Institute image.jpg",
    logo: "/university_images/Uzbekistan/Fergana Polytechnic Institute logo.jpg",
  },
  "central asian university": {
    campusPhoto: "/university_images/Uzbekistan/Central Asian University (former AKFA) image.jpg",
    logo: "/university_images/Uzbekistan/Central Asian University (former AKFA) logo.jpg",
  },
  "central asian university (former akfa)": {
    campusPhoto: "/university_images/Uzbekistan/Central Asian University (former AKFA) image.jpg",
    logo: "/university_images/Uzbekistan/Central Asian University (former AKFA) logo.jpg",
  },
  "lomonosov moscow state university branch in tashkent": {
    campusPhoto: "/university_images/Uzbekistan/Lomonosov Moscow State University Branch in Tashkent image.jpg",
    logo: "/university_images/Uzbekistan/Lomonosov Moscow State University Branch in Tashkent logo.jpg",
  },
  "plekhanov russian university of economics (tashkent branch)": {
    campusPhoto: "/university_images/Uzbekistan/Plekhanov Russian University of Economics (Tashkent Branch) image.jpg",
    logo: "/university_images/Uzbekistan/Plekhanov Russian University of Economics (Tashkent Branch) logo.jpg",
  },
  "plekhanov russian university of economics": {
    campusPhoto: "/university_images/Uzbekistan/Plekhanov Russian University of Economics (Tashkent Branch) image.jpg",
    logo: "/university_images/Uzbekistan/Plekhanov Russian University of Economics (Tashkent Branch) logo.jpg",
  },
  "amity university in tashkent": {
    campusPhoto: "/university_images/Uzbekistan/Amity University in Tashkent image.jpg",
    logo: "/university_images/Uzbekistan/Amity University in Tashkent logo.jpg",
  },
  "turin polytechnic university in tashkent": {
    campusPhoto: "/university_images/Uzbekistan/Turin Polytechnic University in Tashkent image.jpg",
    logo: "/university_images/Uzbekistan/Turin Polytechnic University in Tashkent logo.jpg",
  },
  "inha university in tashkent": {
    campusPhoto: "/university_images/Uzbekistan/Inha University in Tashkent image.jpg",
    logo: "/university_images/Uzbekistan/Inha University in Tashkent logo.jpg",
  },
  "university of world economy and diplomacy": {
    campusPhoto: "/university_images/Uzbekistan/University of World Economy and Diplomacy image.jpg",
    logo: "/university_images/Uzbekistan/University of World Economy and Diplomacy logo.jpg",
  },
};

/**
 * Look up local campus images for a university by name.
 * Returns null if no local images are registered for this university.
 */
export function getLocalUniversityImages(
  name: string
): LocalUniversityImages | null {
  const key = normaliseUniversityName(name);
  return LOCAL_IMAGES[key] ?? null;
}

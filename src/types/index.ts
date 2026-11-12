export type ArtTechnique = 
  | 'Pintura al Óleo' 
  | 'Acrílico sobre Lienzo' 
  | 'Acuarela y Tinta' 
  | 'Escultura y Relieve' 
  | 'Arte Digital' 
  | 'Técnicas Mixtas' 
  | 'Fotografía Artística';

export interface Artwork {
  id: string;
  title: string;
  artistId: string;
  artistName: string;
  artistBioSnippet: string;
  year: number;
  technique: ArtTechnique;
  mediumDetails: string;
  dimensions: string; // e.g. "80 x 60 cm"
  weight?: string;
  framed: boolean;
  priceCOP: number;
  isAvailable: boolean;
  accessionNumber: string;
  description: string;
  conceptStatement: string;
  curatorNotes: string;
  wallPalette: string[];
  visualSvg: {
    type: 'abstract-geo' | 'landscape' | 'portrait' | 'sculpture' | 'minimalist' | 'flora';
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    bgColor: string;
  };
  provenance: string[];
  certificateHash: string;
  shippingTimeDays: number;
}

export type EventAccessType = 'Entrada Libre' | 'Inscripción Previa Requerida';

export interface ExhibitionEvent {
  id: string;
  title: string;
  subtitle: string;
  curator: string;
  dates: string;
  startDate: string;
  endDate: string;
  location: string;
  room: string;
  accessType: EventAccessType;
  priceCOP: number;
  dressCode: string;
  parkingInfo: string;
  transitRoutes: string;
  capacityMax: number;
  capacityRegistered: number;
  description: string;
  highlights: string[];
  featuredArtists: string[];
  visualColor: string;
}

export type CourseModality = 
  | '100% Presencial en Taller' 
  | 'Modalidad Híbrida (Virtual + Taller)' 
  | 'Virtual a tu Propio Ritmo';

export interface CourseModule {
  sessionNumber: number;
  title: string;
  duration: string;
  topics: string[];
}

export interface ArtCourse {
  id: string;
  title: string;
  instructorName: string;
  instructorTitle: string;
  modality: CourseModality;
  durationWeeks: number;
  totalHours: number;
  schedule: string;
  startDate: string;
  priceCOP: number;
  seatsAvailable: number;
  materialsIncluded: string[];
  syllabus: CourseModule[];
  certificationBadge: string;
  targetLevel: string;
  description: string;
  bannerColor: string;
}

export interface ArtistProfile {
  id: string;
  name: string;
  city: string;
  birthYear: number;
  specialty: string;
  statement: string;
  bio: string;
  exhibitionsCount: number;
  awards: string[];
  videoTitle: string;
  videoDuration: string;
  videoTranscript: string;
}

export interface UserTicket {
  id: string;
  eventId: string;
  eventTitle: string;
  date: string;
  attendeeName: string;
  attendeeEmail: string;
  qrCode: string;
  bookingTime: string;
  dressCode: string;
}

export interface UserCertificate {
  id: string;
  artworkId: string;
  artworkTitle: string;
  artistName: string;
  dateIssued: string;
  certificateHash: string;
  registeredTo: string;
  technique: string;
  dimensions: string;
}

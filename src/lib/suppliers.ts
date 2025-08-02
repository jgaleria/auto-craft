export interface Supplier {
  id: string;
  name: string;
  location: string;
  country: string;
  specialties: string[];
  leadTimeRange: string;
  qualityRating: number;
  priceRange: string;
  certifications: string[];
  contact: {
    email: string;
    phone: string;
    website: string;
  };
  yearEstablished: number;
  employeeCount: string;
  components: string[];
  description: string;
}

export const suppliersDatabase: Supplier[] = [
  {
    id: "microtech-solutions",
    name: "MicroTech Solutions",
    location: "Taipei, Taiwan", 
    country: "Taiwan",
    specialties: ["microcontrollers", "semiconductors", "IoT components"],
    leadTimeRange: "25-35 days",
    qualityRating: 4.3,
    priceRange: "medium",
    certifications: ["ISO 9001", "ISO 14001", "RoHS"],
    contact: {
      email: "sales@microtech-solutions.com",
      phone: "+886-2-2345-6789", 
      website: "www.microtech-solutions.com"
    },
    yearEstablished: 1998,
    employeeCount: "500-1000",
    components: ["ARM Cortex microcontrollers", "MEMS sensors", "RF modules", "power management ICs"],
    description: "Leading supplier of microcontrollers and IoT components with 25+ years of experience in semiconductor manufacturing."
  },
  {
    id: "textile-corp-asia",
    name: "Textile Corp Asia", 
    location: "Ho Chi Minh City, Vietnam",
    country: "Vietnam",
    specialties: ["fabrics", "textiles", "apparel"],
    leadTimeRange: "10-21 days",
    qualityRating: 4.2,
    priceRange: "low-medium",
    certifications: ["OEKO-TEX", "GOTS", "ISO 9001"],
    contact: {
      email: "export@textilecorp-asia.com",
      phone: "+84-28-3456-7890",
      website: "www.textilecorp-asia.com"
    },
    yearEstablished: 2005,
    employeeCount: "1000-5000",
    components: ["polyester mesh", "nylon blends", "cotton fabrics", "synthetic materials"],
    description: "Premier textile manufacturer specializing in high-performance fabrics for sportswear and technical applications."
  },
  {
    id: "foam-solutions-ltd", 
    name: "Foam Solutions Ltd",
    location: "Dongguan, China",
    country: "China", 
    specialties: ["foam", "cushioning", "insulation"],
    leadTimeRange: "18-25 days",
    qualityRating: 4.1,
    priceRange: "medium",
    certifications: ["ISO 9001", "CertiPUR-US", "GREENGUARD"],
    contact: {
      email: "info@foam-solutions.cn",
      phone: "+86-769-8765-4321",
      website: "www.foam-solutions.com"
    },
    yearEstablished: 2010,
    employeeCount: "200-500",
    components: ["EVA foam", "memory foam", "polyurethane foam", "acoustic foam"],
    description: "Innovative foam manufacturer providing cushioning and insulation solutions for multiple industries."
  },
  {
    id: "rubber-tech-industries",
    name: "Rubber Tech Industries",
    location: "Kuala Lumpur, Malaysia",
    country: "Malaysia",
    specialties: ["rubber", "elastomers", "sealing"],
    leadTimeRange: "25-35 days", 
    qualityRating: 4.4,
    priceRange: "medium-high",
    certifications: ["ISO 9001", "ISO/TS 16949", "FDA approved"],
    contact: {
      email: "sales@rubbertech.my",
      phone: "+60-3-2134-5678",
      website: "www.rubbertech-industries.com"
    },
    yearEstablished: 1985,
    employeeCount: "300-500",
    components: ["natural rubber compounds", "synthetic elastomers", "gaskets", "O-rings"],
    description: "Established rubber and elastomer specialist with expertise in automotive and industrial applications."
  },
  {
    id: "heating-solutions-inc",
    name: "Heating Solutions Inc",
    location: "Munich, Germany",
    country: "Germany",
    specialties: ["heating elements", "thermal systems", "appliances"],
    leadTimeRange: "15-25 days",
    qualityRating: 4.5,
    priceRange: "high",
    certifications: ["CE marking", "UL Listed", "ISO 9001"],
    contact: {
      email: "contact@heating-solutions.de", 
      phone: "+49-89-1234-5678",
      website: "www.heating-solutions.de"
    },
    yearEstablished: 1975,
    employeeCount: "100-200",
    components: ["stainless steel heating elements", "thermostats", "thermal sensors", "heating cables"],
    description: "German precision engineering for heating solutions with applications in appliances and industrial systems."
  },
  {
    id: "sensor-dynamics-inc",
    name: "Sensor Dynamics Inc",
    location: "Boston, MA, USA",
    country: "USA",
    specialties: ["sensors", "MEMS", "measurement"],
    leadTimeRange: "20-30 days",
    qualityRating: 4.6,
    priceRange: "medium-high",
    certifications: ["ISO 9001", "ISO 13485", "RoHS"],
    contact: {
      email: "sales@sensordynamics.com",
      phone: "+1-617-555-0123",
      website: "www.sensordynamics.com"
    },
    yearEstablished: 1992,
    employeeCount: "50-100",
    components: ["temperature sensors", "humidity sensors", "pressure transducers", "accelerometers"],
    description: "Advanced sensor technology company specializing in MEMS devices for IoT and automotive applications."
  },
  {
    id: "wireless-components-ltd",
    name: "Wireless Components Ltd",
    location: "Cambridge, UK",
    country: "UK",
    specialties: ["wireless", "RF", "communication"],
    leadTimeRange: "30-40 days",
    qualityRating: 4.3,
    priceRange: "medium-high",
    certifications: ["CE marking", "FCC approved", "ISO 9001"],
    contact: {
      email: "info@wireless-components.co.uk",
      phone: "+44-1223-456789",
      website: "www.wireless-components.co.uk"
    },
    yearEstablished: 2000,
    employeeCount: "100-200",
    components: ["WiFi modules", "Bluetooth chipsets", "antennas", "RF filters"],
    description: "Cutting-edge wireless communication solutions for IoT, automotive, and consumer electronics."
  },
  {
    id: "circuit-board-manufacturing",
    name: "Circuit Board Manufacturing",
    location: "Shenzhen, China",
    country: "China",
    specialties: ["PCB", "assembly", "electronics"],
    leadTimeRange: "15-25 days",
    qualityRating: 4.2,
    priceRange: "low-medium",
    certifications: ["ISO 9001", "IPC-A-610", "UL Listed"],
    contact: {
      email: "sales@cbm-china.com",
      phone: "+86-755-8888-9999",
      website: "www.cbm-manufacturing.com"
    },
    yearEstablished: 2008,
    employeeCount: "500-1000",
    components: ["multilayer PCBs", "flexible PCBs", "PCB assembly", "stencils"],
    description: "High-volume PCB manufacturer with advanced production capabilities and quality assurance."
  },
  {
    id: "molded-plastics-corp",
    name: "Molded Plastics Corp",
    location: "Detroit, MI, USA",
    country: "USA",
    specialties: ["plastics", "injection molding", "enclosures"],
    leadTimeRange: "20-30 days",
    qualityRating: 4.0,
    priceRange: "medium",
    certifications: ["ISO 9001", "UL Listed", "FDA approved"],
    contact: {
      email: "quotes@moldedplastics.com",
      phone: "+1-313-555-0199",
      website: "www.moldedplastics.com"
    },
    yearEstablished: 1965,
    employeeCount: "200-500",
    components: ["ABS enclosures", "polycarbonate housings", "custom molds", "gaskets"],
    description: "American injection molding specialist with decades of experience in automotive and electronics industries."
  },
  {
    id: "power-cell-industries",
    name: "Power Cell Industries",
    location: "Osaka, Japan",
    country: "Japan",
    specialties: ["batteries", "power", "energy storage"],
    leadTimeRange: "10-20 days",
    qualityRating: 4.7,
    priceRange: "medium-high",
    certifications: ["UN38.3", "IEC 62133", "ISO 9001"],
    contact: {
      email: "global@powercell.jp",
      phone: "+81-6-1234-5678",
      website: "www.powercell-industries.com"
    },
    yearEstablished: 1980,
    employeeCount: "1000-5000",
    components: ["lithium batteries", "coin cells", "battery packs", "charging circuits"],
    description: "Japanese battery technology leader providing reliable power solutions for consumer and industrial applications."
  },
  {
    id: "audio-components-inc",
    name: "Audio Components Inc",
    location: "Seoul, South Korea", 
    country: "South Korea",
    specialties: ["audio", "speakers", "acoustics"],
    leadTimeRange: "25-35 days",
    qualityRating: 4.4,
    priceRange: "medium",
    certifications: ["ISO 9001", "AES standards", "THX certified"],
    contact: {
      email: "export@audiocomponents.kr",
      phone: "+82-2-9876-5432",
      website: "www.audio-components.com"
    },
    yearEstablished: 1995,
    employeeCount: "300-500", 
    components: ["dynamic drivers", "tweeters", "microphones", "audio DSPs"],
    description: "Korean audio specialist delivering high-fidelity components for consumer electronics and professional audio."
  },
  {
    id: "metal-fabrications-llc",
    name: "Metal Fabrications LLC",
    location: "Pittsburgh, PA, USA",
    country: "USA",
    specialties: ["metal", "fabrication", "machining"],
    leadTimeRange: "20-35 days",
    qualityRating: 4.1,
    priceRange: "medium-high", 
    certifications: ["ISO 9001", "AS9100", "NADCAP"],
    contact: {
      email: "sales@metalfab.com",
      phone: "+1-412-555-0177",
      website: "www.metal-fabrications.com"
    },
    yearEstablished: 1955,
    employeeCount: "100-200",
    components: ["stainless steel parts", "aluminum housings", "steel tubing", "machined components"],
    description: "American metal fabrication company with precision machining capabilities for aerospace and industrial markets."
  },
  {
    id: "smart-controls-inc",
    name: "Smart Controls Inc",
    location: "Silicon Valley, CA, USA",
    country: "USA",
    specialties: ["control systems", "automation", "IoT"],
    leadTimeRange: "30-40 days",
    qualityRating: 4.5,
    priceRange: "high",
    certifications: ["UL Listed", "FCC approved", "ISO 27001"],
    contact: {
      email: "info@smartcontrols.com", 
      phone: "+1-408-555-0145",
      website: "www.smart-controls.com"
    },
    yearEstablished: 2005,
    employeeCount: "200-500",
    components: ["WiFi control boards", "automation controllers", "IoT gateways", "sensors"],
    description: "Silicon Valley innovator in smart control systems and IoT connectivity solutions for next-generation appliances."
  },
  {
    id: "glassware-manufacturing",
    name: "Glassware Manufacturing",
    location: "Prague, Czech Republic",
    country: "Czech Republic",
    specialties: ["glass", "laboratory", "kitchenware"],
    leadTimeRange: "25-35 days",
    qualityRating: 4.3,
    priceRange: "medium",
    certifications: ["ISO 9001", "FDA approved", "LFGB certified"],
    contact: {
      email: "export@glassware.cz",
      phone: "+420-2-3456-7890",
      website: "www.glassware-manufacturing.com"
    },
    yearEstablished: 1985,
    employeeCount: "100-200",
    components: ["borosilicate glass", "tempered glass", "laboratory glassware", "carafes"],
    description: "European glassware specialist producing high-quality borosilicate and laboratory glass products."
  },
  {
    id: "precision-molding-ltd",
    name: "Precision Molding Ltd", 
    location: "Guadalajara, Mexico",
    country: "Mexico",
    specialties: ["silicone", "medical grade", "molding"],
    leadTimeRange: "20-30 days",
    qualityRating: 4.2,
    priceRange: "medium",
    certifications: ["ISO 13485", "FDA registered", "USP Class VI"],
    contact: {
      email: "ventas@precision-molding.mx",
      phone: "+52-33-1234-5678",
      website: "www.precision-molding.com"
    },
    yearEstablished: 2000,
    employeeCount: "150-300",
    components: ["medical grade silicone", "rubber gaskets", "custom molds", "sealing components"],
    description: "Medical-grade silicone molding specialist serving healthcare, consumer electronics, and automotive industries."
  },
  {
    id: "accessory-supplies-co",
    name: "Accessory Supplies Co",
    location: "Bangkok, Thailand",
    country: "Thailand",
    specialties: ["accessories", "hardware", "fasteners"],
    leadTimeRange: "5-12 days",
    qualityRating: 4.0,
    priceRange: "low",
    certifications: ["ISO 9001", "REACH compliant"],
    contact: {
      email: "sales@accessory-supplies.th",
      phone: "+66-2-123-4567",
      website: "www.accessory-supplies.com"
    },
    yearEstablished: 1995,
    employeeCount: "50-100",
    components: ["polyester laces", "metal eyelets", "plastic clips", "elastic bands"],
    description: "Affordable accessory supplier for textiles and consumer goods with fast delivery times."
  },
  {
    id: "comfort-tech",
    name: "Comfort Tech",
    location: "Manchester, UK",
    country: "UK",
    specialties: ["comfort", "ergonomics", "foam"],
    leadTimeRange: "12-18 days",
    qualityRating: 4.3,
    priceRange: "medium",
    certifications: ["OEKO-TEX", "CertiPUR-US", "ISO 9001"],
    contact: {
      email: "info@comforttech.co.uk",
      phone: "+44-161-234-5678",
      website: "www.comfort-tech.co.uk"
    },
    yearEstablished: 2008,
    employeeCount: "100-200",
    components: ["memory foam insoles", "gel padding", "breathable mesh", "antimicrobial treatments"],
    description: "Comfort technology specialist focusing on ergonomic solutions for footwear and seating applications."
  },
  {
    id: "filtration-systems-co",
    name: "Filtration Systems Co",
    location: "Denver, CO, USA",
    country: "USA",
    specialties: ["filtration", "purification", "water treatment"],
    leadTimeRange: "12-20 days",
    qualityRating: 4.4,
    priceRange: "medium",
    certifications: ["NSF certified", "FDA approved", "ISO 9001"],
    contact: {
      email: "sales@filtrationsystems.com",
      phone: "+1-303-555-0144",
      website: "www.filtration-systems.com"
    },
    yearEstablished: 1987,
    employeeCount: "200-300",
    components: ["activated carbon filters", "ceramic filters", "UV sterilizers", "membrane systems"],
    description: "Water filtration specialist with expertise in residential and commercial purification systems."
  },
  {
    id: "pump-technologies-ltd",
    name: "Pump Technologies Ltd",
    location: "Birmingham, UK",
    country: "UK",
    specialties: ["pumps", "fluid handling", "automation"],
    leadTimeRange: "25-35 days",
    qualityRating: 4.2,
    priceRange: "medium-high",
    certifications: ["CE marking", "ATEX certified", "ISO 9001"],
    contact: {
      email: "enquiries@pumptechnologies.co.uk",
      phone: "+44-121-234-5678",
      website: "www.pump-technologies.co.uk"
    },
    yearEstablished: 1972,
    employeeCount: "300-500",
    components: ["centrifugal pumps", "peristaltic pumps", "pressure sensors", "flow controllers"],
    description: "British pump manufacturer with decades of experience in fluid handling and process automation."
  },
  {
    id: "wireless-tech-solutions",
    name: "Wireless Tech Solutions",
    location: "Austin, TX, USA",
    country: "USA",
    specialties: ["wireless", "connectivity", "chipsets"],
    leadTimeRange: "35-45 days",
    qualityRating: 4.1,
    priceRange: "high",
    certifications: ["FCC approved", "Bluetooth SIG", "WiFi Alliance"],
    contact: {
      email: "sales@wirelesstech.com",
      phone: "+1-512-555-0167",
      website: "www.wireless-tech-solutions.com"
    },
    yearEstablished: 2001,
    employeeCount: "500-1000",
    components: ["Bluetooth 5.2 chipsets", "WiFi 6 modules", "NFC controllers", "antenna systems"],
    description: "Advanced wireless connectivity solutions for next-generation consumer electronics and IoT devices."
  },
  {
    id: "audio-processing-corp",
    name: "Audio Processing Corp",
    location: "Los Angeles, CA, USA",
    country: "USA",
    specialties: ["audio processing", "DSP", "noise cancellation"],
    leadTimeRange: "30-40 days",
    qualityRating: 4.6,
    priceRange: "high",
    certifications: ["THX certified", "Dolby licensed", "ISO 9001"],
    contact: {
      email: "sales@audioprocessing.com",
      phone: "+1-323-555-0188",
      website: "www.audio-processing-corp.com"
    },
    yearEstablished: 1995,
    employeeCount: "200-300",
    components: ["ANC processors", "audio DSPs", "beamforming ICs", "acoustic algorithms"],
    description: "Leading audio processing technology company specializing in noise cancellation and premium audio experiences."
  },
  {
    id: "micro-battery-systems",
    name: "Micro Battery Systems",
    location: "Yokohama, Japan",
    country: "Japan",
    specialties: ["micro batteries", "energy storage", "miniaturization"],
    leadTimeRange: "25-35 days",
    qualityRating: 4.5,
    priceRange: "high",
    certifications: ["UN38.3", "IEC 62133", "JIS standards"],
    contact: {
      email: "global@microbattery.jp",
      phone: "+81-45-123-4567",
      website: "www.micro-battery-systems.com"
    },
    yearEstablished: 1988,
    employeeCount: "300-500",
    components: ["lithium polymer micro cells", "coin cell batteries", "flexible batteries", "wireless charging coils"],
    description: "Japanese precision battery manufacturer specializing in ultra-compact power solutions for wearables and IoT."
  },
  {
    id: "metal-works-industries",
    name: "Metal Works Industries",
    location: "Milan, Italy",
    country: "Italy",
    specialties: ["precision metalwork", "aluminum", "machining"],
    leadTimeRange: "25-35 days",
    qualityRating: 4.3,
    priceRange: "medium-high",
    certifications: ["ISO 9001", "EN 9100", "NADCAP"],
    contact: {
      email: "export@metalworks.it",
      phone: "+39-02-1234-5678",
      website: "www.metal-works-industries.com"
    },
    yearEstablished: 1963,
    employeeCount: "200-400",
    components: ["6061 aluminum housings", "precision machined parts", "anodized components", "custom enclosures"],
    description: "Italian precision metalworking company with expertise in aerospace-grade aluminum fabrication and finishing."
  }
];

// Utility functions
export function findSupplierByName(name: string): Supplier | undefined {
  return suppliersDatabase.find(supplier => supplier.name === name);
}

export function findSuppliersByComponent(component: string): Supplier[] {
  return suppliersDatabase.filter(supplier => 
    supplier.components.some(comp => 
      comp.toLowerCase().includes(component.toLowerCase())
    ) ||
    supplier.specialties.some(spec => 
      spec.toLowerCase().includes(component.toLowerCase())
    )
  );
}

export function getAllSuppliers(): Supplier[] {
  return suppliersDatabase;
}

export function getSuppliersByCountry(country: string): Supplier[] {
  return suppliersDatabase.filter(supplier => supplier.country === country);
}

export function getSuppliersBySpecialty(specialty: string): Supplier[] {
  return suppliersDatabase.filter(supplier => 
    supplier.specialties.includes(specialty.toLowerCase())
  );
}
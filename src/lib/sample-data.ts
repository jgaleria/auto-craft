import { BOMResponse } from '@/app/api/generate-bom/route';

export const sampleBOMs: Record<string, BOMResponse> = {
  "smart home temperature sensor": {
    "productName": "Smart Home Temperature Sensor",
    "category": "IoT Hardware",
    "bom": [
      {
        "partNumber": "ESP32-WROOM-32D",
        "description": "WiFi/BLE MCU Module with integrated antenna",
        "material": "Silicon Chip + PCB",
        "quantity": 1,
        "unit": "piece",
        "estimatedCost": 3.45,
        "supplier": "Digikey",
        "leadTime": "2 weeks"
      },
      {
        "partNumber": "SHT31-DIS-B",
        "description": "Digital Temperature/Humidity Sensor",
        "material": "Silicon Sensor",
        "quantity": 1,
        "unit": "piece",
        "estimatedCost": 4.20,
        "supplier": "Mouser",
        "leadTime": "3 weeks"
      },
      {
        "partNumber": "AMS1117-3.3",
        "description": "3.3V Voltage Regulator",
        "material": "Silicon Chip",
        "quantity": 1,
        "unit": "piece",
        "estimatedCost": 0.35,
        "supplier": "Arrow",
        "leadTime": "1 week"
      },
      {
        "partNumber": "PCB-TS101-V1",
        "description": "2-layer FR4 PCB, lead-free",
        "material": "FR4 + Copper",
        "quantity": 1,
        "unit": "piece",
        "estimatedCost": 1.20,
        "supplier": "JLCPCB",
        "leadTime": "2 weeks"
      },
      {
        "partNumber": "ENC-ABS-85x55x25",
        "description": "ABS Plastic Enclosure with Wall Mount",
        "material": "ABS Plastic",
        "quantity": 1,
        "unit": "piece",
        "estimatedCost": 2.15,
        "supplier": "RS Components",
        "leadTime": "2 weeks"
      },
      {
        "partNumber": "USB-C-SMD-16",
        "description": "USB Type-C Connector",
        "material": "Copper Alloy",
        "quantity": 1,
        "unit": "piece",
        "estimatedCost": 0.45,
        "supplier": "Farnell",
        "leadTime": "1 week"
      },
      {
        "partNumber": "PASS-KIT-01",
        "description": "Passive Components Kit (10 resistors, 8 capacitors)",
        "material": "Various",
        "quantity": 1,
        "unit": "set",
        "estimatedCost": 0.85,
        "supplier": "Digikey",
        "leadTime": "1 week"
      },
      {
        "partNumber": "SCR-M2.5-8",
        "description": "M2.5 Self-tapping Screws",
        "material": "Stainless Steel",
        "quantity": 4,
        "unit": "piece",
        "estimatedCost": 0.05,
        "supplier": "McMaster-Carr",
        "leadTime": "1 week"
      }
    ],
    "totalMaterialCost": 12.85,
    "estimatedLaborCost": 4.50,
    "totalCost": 17.35,
    "estimatedRetailPrice": 49.99
  },
  "performance running shoe": {
    "productName": "Performance Running Shoe",
    "category": "Athletic Footwear",
    "bom": [
      {
        "partNumber": "MESH-UPPER-001",
        "description": "Breathable Mesh Upper - Polyester",
        "material": "Polyester Mesh",
        "quantity": 1,
        "unit": "pair",
        "estimatedCost": 12.50,
        "supplier": "Textile Solutions Inc",
        "leadTime": "3 weeks"
      },
      {
        "partNumber": "FOAM-MIDSOLE-002",
        "description": "EVA Foam Midsole - Dual Density",
        "material": "EVA Foam",
        "quantity": 1,
        "unit": "pair",
        "estimatedCost": 8.75,
        "supplier": "Foam Technologies",
        "leadTime": "2 weeks"
      },
      {
        "partNumber": "RUBBER-OUTSOLE-003",
        "description": "Carbon Rubber Outsole - High Grip",
        "material": "Carbon Rubber",
        "quantity": 1,
        "unit": "pair",
        "estimatedCost": 6.25,
        "supplier": "Rubber Dynamics",
        "leadTime": "4 weeks"
      },
      {
        "partNumber": "LACES-POLY-004",
        "description": "Polyester Laces - 45 inch",
        "material": "Polyester",
        "quantity": 1,
        "unit": "pair",
        "estimatedCost": 0.85,
        "supplier": "Lace Masters",
        "leadTime": "1 week"
      },
      {
        "partNumber": "EYELETS-METAL-005",
        "description": "Metal Eyelets - Stainless Steel",
        "material": "Stainless Steel",
        "quantity": 14,
        "unit": "piece",
        "estimatedCost": 0.12,
        "supplier": "Hardware Plus",
        "leadTime": "2 weeks"
      }
    ],
    "totalMaterialCost": 30.15,
    "estimatedLaborCost": 15.85,
    "totalCost": 46.00,
    "estimatedRetailPrice": 129.99
  },
  "smart coffee maker": {
    "productName": "12-Cup Smart Coffee Maker",
    "category": "Kitchen Appliances",
    "bom": [
      {
        "partNumber": "HEATING-ELEMENT-001",
        "description": "1500W Heating Element - Stainless Steel",
        "material": "Stainless Steel",
        "quantity": 1,
        "unit": "piece",
        "estimatedCost": 18.50,
        "supplier": "Heating Solutions Inc",
        "leadTime": "3 weeks"
      },
      {
        "partNumber": "CARAFE-GLASS-002",
        "description": "Glass Carafe - 12 Cup Capacity",
        "material": "Borosilicate Glass",
        "quantity": 1,
        "unit": "piece",
        "estimatedCost": 15.25,
        "supplier": "Glassware Manufacturing",
        "leadTime": "4 weeks"
      },
      {
        "partNumber": "WIFI-MODULE-003",
        "description": "WiFi Control Module - 802.11n",
        "material": "Electronic Module",
        "quantity": 1,
        "unit": "piece",
        "estimatedCost": 12.75,
        "supplier": "Smart Components Ltd",
        "leadTime": "2 weeks"
      },
      {
        "partNumber": "HOUSING-PLASTIC-004",
        "description": "ABS Plastic Housing - Black",
        "material": "ABS Plastic",
        "quantity": 1,
        "unit": "piece",
        "estimatedCost": 22.00,
        "supplier": "Plastic Molding Co",
        "leadTime": "5 weeks"
      },
      {
        "partNumber": "PUMP-WATER-005",
        "description": "Water Pump - 12V DC",
        "material": "Plastic + Motor",
        "quantity": 1,
        "unit": "piece",
        "estimatedCost": 8.95,
        "supplier": "Pump Technologies",
        "leadTime": "3 weeks"
      }
    ],
    "totalMaterialCost": 77.45,
    "estimatedLaborCost": 22.55,
    "totalCost": 100.00,
    "estimatedRetailPrice": 299.99
  },
  "wireless earbuds": {
    "productName": "Wireless Earbuds with ANC",
    "category": "Audio Electronics",
    "bom": [
      {
        "partNumber": "DRIVER-DYNAMIC-001",
        "description": "10mm Dynamic Driver - Neodymium",
        "material": "Neodymium Magnet",
        "quantity": 2,
        "unit": "piece",
        "estimatedCost": 8.50,
        "supplier": "Audio Components Inc",
        "leadTime": "4 weeks"
      },
      {
        "partNumber": "BLUETOOTH-CHIP-002",
        "description": "Bluetooth 5.0 SoC with ANC",
        "material": "Silicon Chip",
        "quantity": 1,
        "unit": "piece",
        "estimatedCost": 15.75,
        "supplier": "Wireless Tech Solutions",
        "leadTime": "6 weeks"
      },
      {
        "partNumber": "BATTERY-LIPO-003",
        "description": "Li-Po Battery - 55mAh",
        "material": "Lithium Polymer",
        "quantity": 2,
        "unit": "piece",
        "estimatedCost": 3.25,
        "supplier": "Battery Dynamics",
        "leadTime": "3 weeks"
      },
      {
        "partNumber": "CASE-CHARGING-004",
        "description": "Charging Case - ABS with Battery",
        "material": "ABS Plastic",
        "quantity": 1,
        "unit": "piece",
        "estimatedCost": 18.90,
        "supplier": "Case Manufacturing",
        "leadTime": "4 weeks"
      },
      {
        "partNumber": "TIPS-SILICONE-005",
        "description": "Silicone Ear Tips - 3 Sizes",
        "material": "Medical Grade Silicone",
        "quantity": 3,
        "unit": "set",
        "estimatedCost": 2.15,
        "supplier": "Silicone Solutions",
        "leadTime": "2 weeks"
      }
    ],
    "totalMaterialCost": 48.55,
    "estimatedLaborCost": 16.45,
    "totalCost": 65.00,
    "estimatedRetailPrice": 199.99
  },
  "ergonomic office chair": {
    "productName": "Ergonomic Office Chair with Lumbar Support",
    "category": "Office Furniture",
    "bom": [
      {
        "partNumber": "FRAME-ALUMINUM-001",
        "description": "Aluminum Frame - Powder Coated",
        "material": "Aluminum Alloy",
        "quantity": 1,
        "unit": "piece",
        "estimatedCost": 45.00,
        "supplier": "Metal Fabricators Inc",
        "leadTime": "5 weeks"
      },
      {
        "partNumber": "MESH-BACK-002",
        "description": "Ergonomic Mesh Back Support",
        "material": "Polyester Mesh",
        "quantity": 1,
        "unit": "piece",
        "estimatedCost": 28.50,
        "supplier": "Ergonomic Solutions",
        "leadTime": "3 weeks"
      },
      {
        "partNumber": "CUSHION-FOAM-003",
        "description": "Memory Foam Seat Cushion",
        "material": "Memory Foam",
        "quantity": 1,
        "unit": "piece",
        "estimatedCost": 22.75,
        "supplier": "Comfort Foam Co",
        "leadTime": "2 weeks"
      },
      {
        "partNumber": "WHEELS-NYLON-004",
        "description": "Nylon Caster Wheels - 5 piece set",
        "material": "Nylon",
        "quantity": 1,
        "unit": "set",
        "estimatedCost": 15.25,
        "supplier": "Wheel Solutions",
        "leadTime": "2 weeks"
      },
      {
        "partNumber": "GAS-CYLINDER-005",
        "description": "Pneumatic Height Adjustment Cylinder",
        "material": "Steel + Pneumatics",
        "quantity": 1,
        "unit": "piece",
        "estimatedCost": 32.00,
        "supplier": "Pneumatic Systems",
        "leadTime": "4 weeks"
      }
    ],
    "totalMaterialCost": 143.50,
    "estimatedLaborCost": 56.50,
    "totalCost": 200.00,
    "estimatedRetailPrice": 599.99
  }
};

const sampleData = { sampleBOMs };
export default sampleData;
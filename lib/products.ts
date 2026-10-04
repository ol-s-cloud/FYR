export type ProductStatus="AVAILABLE"|"SOLD_OUT"|"COMING_SOON";
export type Product={slug:string;name:string;department:"collections"|"sport"|"ritual"|"essentials"|"fragrance"|"supplements"|"objects";subcategories:string[];note:string;price:number;status?:ProductStatus;supplier?:{provider:string;sku?:string;cost?:number}};
export const products:Product[]=[
{slug:"sovereign-training-tee",name:"SOVEREIGN TRAINING TEE",department:"sport",subcategories:["RUNNING","BOXING"],note:"HEAVY / PERFORMANCE",price:58},
{slug:"ritual-robe",name:"RITUAL ROBE",department:"ritual",subcategories:["RECOVERY"],note:"RECOVERY / SELF-CARE",price:110},
{slug:"uniform-trouser",name:"UNIFORM TROUSER 001",department:"essentials",subcategories:["TROUSERS"],note:"DAILY UNIFORM",price:95},
{slug:"discipline-sock",name:"DISCIPLINE SOCK 3-PACK",department:"essentials",subcategories:["SOCKS"],note:"TRAIN / RECOVER",price:32},
{slug:"heavyweight-hood",name:"HEAVYWEIGHT HOOD",department:"essentials",subcategories:["HOODIES"],note:"480 GSM / OVERSIZED",price:120},
{slug:"ritual-towel",name:"RITUAL TOWEL",department:"ritual",subcategories:["TOWELS","RECOVERY"],note:"BATH / TRAINING",price:42},
{slug:"training-short",name:"TRAINING SHORT 001",department:"sport",subcategories:["RUNNING","BOXING","BASKETBALL"],note:"MOVEMENT / DAILY",price:68},
{slug:"field-journal",name:"FIELD JOURNAL",department:"objects",subcategories:["JOURNALS"],note:"PRACTICE / RECORD",price:28}
];
export const departments = [
  {slug:"collections",name:"COLLECTIONS",description:"Original FYR releases, limited runs and collaborations.",subcategories:["DROPS","LIMITED RELEASES","COLLABORATIONS"]},
  {slug:"sport",name:"SPORT",description:"Equipment and uniform for disciplined movement.",subcategories:["BOXING","RUNNING","TENNIS","FOOTBALL","BASKETBALL"]},
  {slug:"ritual",name:"RITUAL",description:"Recovery, body care and the objects around daily practice.",subcategories:["RECOVERY","BODY CARE","CANDLES","TOWELS","SELF-CARE"]},
  {slug:"essentials",name:"ESSENTIALS",description:"The repeatable uniform.",subcategories:["TEES","HOODIES","TROUSERS","SOCKS","LAYERS"]},
  {slug:"fragrance",name:"FRAGRANCE",description:"Scent as part of the uniform.",subcategories:["PERFUME","EAU DE PARFUM","OILS","DISCOVERY SETS"]},
  {slug:"supplements",name:"SUPPLEMENTS",description:"A considered edit for training, fuel and recovery.",subcategories:["PROTEIN","COLLAGEN","CREATINE","ELECTROLYTES","VITAMINS + MINERALS","RECOVERY"]},
  {slug:"objects",name:"OBJECTS",description:"Useful things selected for everyday practice.",subcategories:["BAGS","BOTTLES","JOURNALS","ACCESSORIES"]},
] as const;
export type DepartmentSlug=(typeof departments)[number]["slug"];
export const getDepartment=(slug:string)=>departments.find(d=>d.slug===slug);

export type Category =
  | 'amigurumi'
  | 'garments'
  | 'home-decor'
  | 'accessories'
  | 'baby'

export type SkillLevel = 'beginner' | 'easy' | 'intermediate' | 'advanced'

export interface Abbreviation {
  abbr: string
  meaning: string
}

export interface PatternSection {
  heading: string
  steps: string[]
}

export interface Pattern {
  id: string
  slug: string
  title: string
  category: Category
  skillLevel: SkillLevel
  hookSize: string
  yarnWeight: string
  estimatedTime: string
  finishedSize?: string
  gauge?: string
  tagline: string
  description: string
  materials: string[]
  abbreviations: Abbreviation[]
  sections: PatternSection[]
  notes?: string[]
  tags: string[]
  accent: 'sol' | 'clay' | 'sage'
  featured?: boolean
}

export const CATEGORY_LABELS: Record<Category, string> = {
  amigurumi: 'Amigurumi',
  garments: 'Garments',
  'home-decor': 'Home Decor',
  accessories: 'Accessories',
  baby: 'Baby & Kids',
}

export const SKILL_LABELS: Record<SkillLevel, string> = {
  beginner: 'Beginner',
  easy: 'Easy',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

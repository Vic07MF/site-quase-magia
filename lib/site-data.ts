export const siteConfig = {
  whatsappNumber: '5519998026176',
  instagramUrl: 'https://www.instagram.com/quase_magia',
  logoUrl: '/quase-magia-logo-completa.png',
  brand: 'Quase Magia',
}

export const categories = [
  { id: 'todos', label: 'Todas as peças', eyebrow: 'Vitrine completa' },
  { id: 'acessorios', label: 'Chaveiros e acessórios', eyebrow: 'Para levar com você' },
  { id: 'articulados', label: 'Criaturas articuladas', eyebrow: 'Movimento e fantasia' },
  { id: 'rpg', label: 'RPG e colecionáveis', eyebrow: 'Para quem vive histórias' },
  { id: 'organizacao', label: 'Organização e utilidades', eyebrow: 'Bonito e funcional' },
  { id: 'decoracao', label: 'Vasos e decoração', eyebrow: 'Detalhes que transformam' },
  { id: 'personalizados', label: 'Presentes personalizados', eyebrow: 'Feito para alguém especial' },
] as const

export type CategoryId = (typeof categories)[number]['id']

export type Product = {
  name: string
  category: Exclude<CategoryId, 'todos'>
  description: string
  image: string
  customizable?: boolean
  imageAlt: string
}

// Conteúdo demonstrativo: substitua imagens e nomes pelos produtos reais da loja.
export const products: Product[] = [
  { name: 'Chaveiro personalizado', category: 'acessorios', description: 'Um detalhe só seu para acompanhar todos os dias.', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=85', customizable: true, imageAlt: 'Pequeno objeto artesanal colorido sobre uma mesa clara' },
  { name: 'Dragão articulado', category: 'articulados', description: 'Uma criatura cheia de movimento para despertar a imaginação.', image: 'https://images.unsplash.com/photo-1602523961358-f9f03dd557db?auto=format&fit=crop&w=900&q=85', imageAlt: 'Miniatura decorativa com aparência de criatura fantástica' },
  { name: 'Criatura fantástica', category: 'articulados', description: 'Companhia mágica para a estante, a mesa ou a aventura.', image: 'https://images.unsplash.com/photo-1594784058566-3f7b4f6b7a31?auto=format&fit=crop&w=900&q=85', imageAlt: 'Peça decorativa lúdica em tons pastel' },
  { name: 'Mini vaso decorativo', category: 'decoracao', description: 'Pequeno no tamanho, enorme no charme.', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85', customizable: true, imageAlt: 'Vaso pequeno com planta em ambiente iluminado' },
  { name: 'Organizador de mesa', category: 'organizacao', description: 'Para deixar o seu cantinho mais leve e criativo.', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=85', imageAlt: 'Mesa organizada com objetos de trabalho e decoração' },
  { name: 'Peça temática de RPG', category: 'rpg', description: 'Um pedacinho da sua próxima campanha para guardar.', image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=900&q=85', customizable: true, imageAlt: 'Objetos de fantasia dispostos sobre uma mesa' },
]

export function whatsappUrl(message: string) {
  if (!siteConfig.whatsappNumber) return undefined
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function interestUrl(productName: string) {
  return whatsappUrl(`Olá! Conheci a Quase Magia pelo site e tenho interesse no produto ${productName}. Poderiam me passar mais informações?`)
}

export const customMessage = 'Olá! Conheci a Quase Magia pelo site e gostaria de conversar sobre uma ideia personalizada.'
export const currentYear = new Date().getFullYear()

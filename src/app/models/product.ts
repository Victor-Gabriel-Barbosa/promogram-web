export interface Product {
  nome: string;
  preco: number | string | null;
  preco_parcelado: number | string | null;
  link: string | null;
  cupom: string | null;
  imagem: string | null;
  publicado: boolean;
  id: number;
}

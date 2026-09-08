export interface Coupon {
  nome: string;
  codigo: string | null;
  desconto: number | string | null;
  limite_minimo: number | string | null;
  link: string | null;
  imagem: string | null;
  publicado: boolean;
  id: number;
}

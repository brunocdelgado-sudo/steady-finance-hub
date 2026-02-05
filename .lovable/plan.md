

## Plano: Aumentar Logo para o Tamanho do Botao

### Contexto

O botao "Falar no WhatsApp" tem altura aproximada de 40-44px (padrao do componente Button). Vamos aumentar a logo para ter uma altura similar.

### Alteracoes

**Arquivo:** `src/components/Header.tsx` (linha 68-71)

| Propriedade | Atual | Novo |
|-------------|-------|------|
| Altura mobile | `h-12` (48px) | `h-14` (56px) |
| Altura desktop | `md:h-14` (56px) | `md:h-16` (64px) |

**Arquivo:** `src/components/Footer.tsx` (linha 14-17)

| Propriedade | Atual | Novo |
|-------------|-------|------|
| Altura | `h-14` (56px) | `h-16` (64px) |

### Resultado

A logo ficara com altura de 56px no mobile e 64px no desktop, proporcionando um tamanho visual similar ao botao do WhatsApp no Header.


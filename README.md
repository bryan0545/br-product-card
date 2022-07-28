# BR-Product-Card

Este es un paquete de prueba para despliegues en NPM

### Bryan Rodas Collazos

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons} from 'br-product-card'
```

```
<ProductCard
   product={product}
   initialValues={{ count: 4, maxCount: 10 }}>
 {({ reset, count, increseCounter, isMaxCountReached }) => (
   <>
     <ProductImage />
     <ProductTitle title="Coffee Coffee" />
     <ProductButtons />
   </>
 )}
</ProductCard>
```

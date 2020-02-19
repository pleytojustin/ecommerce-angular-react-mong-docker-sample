import { PipeTransform, Pipe } from '@angular/core';
import { Product } from './models/product.model';


@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform{
    transform(products: Product[], searchTerm: string): Product[] {
        if(!products || !searchTerm){
            return products;
        }
        return products.filter(product => 
            product.productName.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
    }

}
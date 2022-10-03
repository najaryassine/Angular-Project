import { Component, OnInit } from '@angular/core';
import {product} from "../model/product";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
public title: String; /*= 'MyStore App'*/
  // name : string;

  public list:product[];

  constructor() {
   /* this.title = 'MyStore App';*/
  }

  ngOnInit(): void
      {
    this.title = 'MyStore App'
    this.list= [
              {id : 12 ,
                name : 'pull',
                price :5,
                quantity : 5,
              nbrLike:4,
              picture: 'https://static.bershka.net/4/photos2/2022/I/0/2/p/2695/880/800/2695880800_2_13_3.jpg?t=1659540894704',
                description: 'aaaa'
              },

              {id : 20 ,
                name : 'T-Shirt',
                price :10,
                quantity : 2,
                nbrLike:3,
                picture: 'https://www.b-z-b.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-Bizzbee-master-catalog/default/dw41b196df/images/2001589_10512_V2.jpg?sw=400&sh=600&sm=cut',
                description: 'bbbb'
              }
               ]
        }

        incrementLike(product:product):void
            {
            let i = this.list.indexOf(product);
            if(i!=-1)
            {
              this.list[i].nbrLike++
            }
            }

        BuyProduct(product:product):void
        {
          let i = this.list.indexOf(product);
          if(i!=-1)
          {
            this.list[i].quantity--
          }
        }


}

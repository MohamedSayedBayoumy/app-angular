import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  data: Product[] = [
    {
      img: 'path/to/image1.jpg',
      des: 'Product description 1',
      title: 'Product 1',
      price: 29.99,
    },
    {
      img: 'path/to/image2.jpg',
      des: 'Product description 2',
      title: 'Product 2',
      price: 49.99,
    },
    {
      img: 'path/to/image3.jpg',
      des: 'Product description 3',
      title: 'Product 3',
      price: 39.99,
    },
    {
      img: 'path/to/image4.jpg',
      des: 'Product description 4',
      title: 'Product 4',
      price: 59.99,
    },
    {
      img: 'path/to/image5.jpg',
      des: 'Product description 5',
      title: 'Product 5',
      price: 19.99,
    },
    {
      img: 'path/to/image6.jpg',
      des: 'Product description 6',
      title: 'Product 6',
      price: 69.99,
    },
    {
      img: 'path/to/image7.jpg',
      des: 'Product description 7',
      title: 'Product 7',
      price: 79.99,
    },
    {
      img: 'path/to/image8.jpg',
      des: 'Product description 8',
      title: 'Product 8',
      price: 89.99,
    },
    {
      img: 'path/to/image9.jpg',
      des: 'Product description 9',
      title: 'Product 9',
      price: 99.99,
    },
    {
      img: 'path/to/image10.jpg',
      des: 'Product description 10',
      title: 'Product 10',
      price: 109.99,
    },

    {
      img: 'path/to/image11.jpg',
      des: 'Product description 11',
      title: 'Product 11',
      price: 119.99,
    },
    {
      img: 'path/to/image12.jpg',
      des: 'Product description 12',
      title: 'Product 12',
      price: 129.99,
    },
    {
      img: 'path/to/image13.jpg',
      des: 'Product description 13',
      title: 'Product 13',
      price: 139.99,
    },
    {
      img: 'path/to/image14.jpg',
      des: 'Product description 14',
      title: 'Product 14',
      price: 149.99,
    },
    {
      img: 'path/to/image15.jpg',
      des: 'Product description 15',
      title: 'Product 15',
      price: 159.99,
    },
    {
      img: 'path/to/image16.jpg',
      des: 'Product description 16',
      title: 'Product 16',
      price: 169.99,
    },
    {
      img: 'path/to/image17.jpg',
      des: 'Product description 17',
      title: 'Product 17',
      price: 179.99,
    },
    {
      img: 'path/to/image18.jpg',
      des: 'Product description 18',
      title: 'Product 18',
      price: 189.99,
    },
    {
      img: 'path/to/image19.jpg',
      des: 'Product description 19',
      title: 'Product 19',
      price: 199.99,
    },
    {
      img: 'path/to/image20.jpg',
      des: 'Product description 20',
      title: 'Product 20',
      price: 209.99,
    },
  ];
}
interface Product {
  img: string;
  des: string;
  title: string;
  price: number;
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_model/product.model';
import { OrderDetails } from '../_model/order-details.model';
import { MyOrderDetails } from '../_model/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PATH_OF_API = "http://localhost:9090";
  PATH_OF_API_PROD = "https://proyectointegrador-backend-production.up.railway.app:7528";

  constructor(private httpClient: HttpClient) { }

  public markAsDelivered(orderId){
    return this.httpClient.get(this.PATH_OF_API_PROD + "/markOrderAsDelivered/" + orderId);
  }

  public getAllOrderDetailsForAdmin(status: string): Observable<MyOrderDetails[]>{
    return this.httpClient.get<MyOrderDetails[]>(this.PATH_OF_API_PROD + "/getAllOrderDetails/" + status);
  }

  public getMyOrders(): Observable<MyOrderDetails[]>{
    return this.httpClient.get<MyOrderDetails[]>(this.PATH_OF_API_PROD + "/getOrderDetails");
  }

  public deleteCartItem(cartId){
    return this.httpClient.delete(this.PATH_OF_API_PROD + "/deleteCartItem/" + cartId);
  }

  public addProduct(product: FormData){
    return this.httpClient.post<Product>(this.PATH_OF_API_PROD + "/addNewProduct", product);
  }

  public getAllProducts(pageNumber, searchKeyword: string = ""){
    return this.httpClient.get<Product[]>(this.PATH_OF_API_PROD + "/getAllProducts?pageNumber=" + pageNumber + "&searchKey=" + searchKeyword);
  }

  public getProductDetailsById(productId){
    return this.httpClient.get<Product>(this.PATH_OF_API_PROD + "/getProductDetailsById/" + productId);
  }

  public deleteProduct(productId: number){
    return this.httpClient.delete(this.PATH_OF_API_PROD + "/deleteProductDetails/" + productId)
  }

  public getProductDetails(isSingleProductCheckout, productId){
    return this.httpClient.get<Product[]>(this.PATH_OF_API_PROD + "/getProductDetails/" + isSingleProductCheckout + "/" + productId);
  }

  public placeOrder(orderDetails: OrderDetails, isCartCheckout){
    return this.httpClient.post(this.PATH_OF_API_PROD + "/placeOrder/" + isCartCheckout, orderDetails)
  }

  public addToCart(productId){
    return this.httpClient.get(this.PATH_OF_API_PROD + "/addToCart/" + productId);
  }

  public getCartDetails(){
    return this.httpClient.get(this.PATH_OF_API_PROD + "/getCartDetails");
  }
}

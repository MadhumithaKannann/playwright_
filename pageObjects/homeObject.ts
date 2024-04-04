export class HomeObjects{

    protected homeElements = {

        inventryItem_loc:()=> ".inventory_item_name",
        inventryItemPrice_loc:()=> ".inventory_item_price",
        inventryBtn_loc:()=> ".btn_inventory",
        inventryDescription_loc:()=>".inventory_item_desc",
        inventryIteImg_loc:() => "inventory_item_img",
        inventryAddToCart_btn:()=>"ADD TO CART",
        addToCartWithInventry:(product:string)=>`(//div[contains(.,'${product}') and contains(@class,'inventory_item_name')]//following::button)[1]`,
        addCartIcon_loc:()=>`[data-icon="shopping-cart"]`
    }


}
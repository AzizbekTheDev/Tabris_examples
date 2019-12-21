import { Page, TextView, ImageView } from "tabris";

export class MyDashboard extends Page{
    constructor(...props){
        super();
        this.set({title: "Dashboard", ...props}).append(
            <$>
                <TextView center font="24px" color={[125, 125, 125]}>No Dashboards yet</TextView>
                <ImageView right="16" bottom="16" height="56" width="56" elevation="6"
                 cornerRadius='28px' highlightOnTouch="true" background="blue" 
                 image={{src: "./assets/plus.png", width: 24, height: 24}} />
            </$>
        )
    }
}
import { Component } from "@angular/core";
import { toArray } from "rxjs";

@Component({
    selector: 'app-home-member',
    templateUrl: './home-member.component.html',
    styleUrls:['home-member.component.css']
})
export class HomeMemberComponent{
    kalimat:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus assumenda accusantium asperiores sint, ex pariatur esse repellat id adipisci nobis ea deserunt. Quidem nostrum aspernatur labore, ea laudantium obcaecati.Veritatis labore nisi unde, ad natus minima mollitia ea ipsum corrupti error fugiat harum, rem eius praesentium ut similique aut perspiciatis inventore odit assumenda sequi quo numquam! Mollitia, animi sint?Aspernatur minima, illo dolor asperiores deserunt suscipit nobis soluta, odio sit veniam adipisci vitae esse! Soluta quaerat, consequatur praesentium ab accusamus id magni aliquam assumenda qui. Fugiat quos deserunt impedit.Voluptas minus ea veritatis harum officia sint magni deleniti quae beatae ipsam, tenetur pariatur eos praesentium culpa laudantium temporibus dolorem ratione sapiente quas. Delectus voluptates recusandae repellat est corrupti atque.Vero facilis quisquam deserunt sed illo laudantium adipisci. Commodi perferendis provident, neque sed repellendus accusamus quae fuga explicabo, vitae aspernatur vero voluptate debitis totam deleniti, in est sint autem quas!Animi esse saepe molestias fuga velit! Enim vero distinctio praesentium odit quibusdam, magnam fugit iusto saepe nulla ut explicabo corporis! Quos eius dolores unde quam quidem consequuntur reprehenderit molestiae voluptatum.    Rem voluptas, eius in, aliquam delectus quis sunt iste explicabo inventore nam expedita dolor soluta quas laudantium magnam? Placeat veritatis eos aliquam assumenda fugit aspernatur quidem vero harum neque sunt.    Quam, voluptas sint, ducimus maiores id nesciunt, nam facilis quaerat explicabo modi architecto corporis aspernatur ut quo eos obcaecati consequatur consequuntur optio vitae adipisci tempore. Itaque sunt aperiam iste aut!    Possimus, perspiciatis adipisci sequi quas vitae eaque dolorum, magnam, ab cumque debitis sapiente necessitatibus cupiditate nobis ex reiciendis modi sint repellendus aliquid ipsum amet vero eligendi tempora praesentium quos! Voluptates.    Ab vitae laboriosam atque possimus non delectus optio perspiciatis adipisci quae quas nesciunt nam architecto consequatur quos recusandae minus doloremque voluptate voluptatem enim at, ipsam excepturi consectetur nihil. Laborum, accusamus!" 
    count:number = this.kalimat.length;
    textAfterMultiply:string= this.kalimat.slice(0,this.count*0.5)

    
    
    
    panelTab: string = 'myActivities'
    threadCategory=[
        {name: 'Everyone', code: 'T01'},
        {name: 'Premium', code: 'T05'}
    ];

}
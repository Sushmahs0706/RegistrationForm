import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AST_DefClass } from 'terser';

class App extends Component {
  state = {
    header:"Workshop Registration",
    sub:"Register now while seats are available!",
    forms:[
    
    ],
    enabled:true,
    submitted:false,
    indexEdited:-1,
    isFirst:true,
    isCode:true,
    isPrevPg:false,
    isPage3:false,
    form: {
        title:"Title",
        first:"First",
        last:"Last",
        suffix:"Suffix",
        add1:"Street Address",
        add2:"Address Line 2",
        city:"City",
        state:"State/Province/Region",
        post:"Postal/Zip Code",
        country:"Country",
        email:"Email-ID"
    },
};
// clearData = () => {
//     this.setState({form: {}});
// }

addRow = () =>{
    // backup of forms
    var formsBackup=[...this.state.forms];
    // backup <- form
    formsBackup.push(this.state.form);
    // setState update forms
    this.setState({forms:formsBackup});
    // this.clearData();
    }
   
//   handleFirst=(event)=>this.setState({form:[{first: event.target.value}]});
//   handleLast=(event)=>this.setState({form:{last: event.target.value}});
//   handleSuffix=(event)=>this.setState({form:{suffix: event.target.value}});
//   handleFirst=(event)=>this.setState({form:{first: event.target.value}});
//   handleAdd1=(event)=>this.setState({form:{add1: event.target.value}});
//   handleAdd2=(event)=>this.setState({form:{add2: event.target.value}});
//   handleCity=(event)=>this.setState({form:{city: event.target.value}});
//   handleState=(event)=>this.setState({form:{state: event.target.value}});
//   handlePost=(event)=>this.setState({form:{post: event.target.value}});
//   handleCountry=(event)=>this.setState({form:{country: event.target.value}});
  handleChangeInput= (event) => {
    // var formBackup=[...this.state.form];
    // formBackup[0][event.target.name]=event.target.value;
    var formBk = JSON.parse(JSON.stringify(this.state.form));
    formBk[event.target.name]= event.target.value;
    this.setState({form:formBk});
}
// handleValidation=()=>{
//     if(!this.state.form.title){
//         // debugger;
//        this.setState({enabled:false});
//         var a=this.state.isDisplay.Title;
//         this.setState({a:true});
//         return true;
//      }
//      else if(!this.state.form.first){
//         var b=this.state.isDisplay.First;
//         this.setState({b:true});
//         return true;
//      }
//      else if(!this.state.form.last){
//         var c=this.state.isDisplay.Last;
//         this.setState({c:true});
//         return true;
//      }
//      else if(!this.state.form.suffix){
//         var d=this.state.isDisplay.Suffix;
//         this.setState({d:true});
//         return true;
//      }
//      else if(!this.state.form.add1){
//         var e=this.state.isDisplay.Add1;
//         this.setState({e:true});
//         return true;
//      }
//      else if(!this.state.form.add2){
//         var f=this.state.isDisplay.Add2;
//         this.setState({f:true});
//         return true;
//      }
//      else if(!this.state.form.city){
//         var g=this.state.isDisplay.City;
//         this.setState({g:true});
//         return true;
//      }
//      else if(!this.state.form.state){
//         var h=this.state.isDisplay.State;
//         this.setState({h:true});
//         return true;
//      }
//      else if(!this.state.form.post){
//         var i=this.state.isDisplay.Post;
//         this.setState({i:true});
//         return true;
//      }
//      else if(!this.state.form.email){
//         var j=this.state.isDisplay.Email;
//         this.setState({j:true});
//         return true;
//      }

// }
handleValidation=()=>{
    if(!this.state.form.title||!this.state.form.first||!this.state.form.last||!this.state.form.suffix||!this.state.form.add1||!this.state.form.add1
        ||!this.state.form.city||!this.state.form.state||!this.state.form.post||!this.state.form.email){
        return true;
    }
    
}
onClickOfSubmit=()=>{
     this.setState({submitted:true});
    if(this.handleValidation()) {
        return;
    }
    if(this.state.indexEdited!=-1){
         var formsBk=[...this.state.forms];
         formsBk[this.state.indexEdited] = {title: this.state.form.title, 
                                            first:this.state.form.first,
                                            last:this.state.form.last,
                                            suffix:this.state.form.suffix,
                                            add1:this.state.form.add1,
                                            add2:this.state.form.add2,
                                            city:this.state.form.city,
                                            state:this.state.form.state,
                                            post:this.state.form.post,
                                            country:this.state.form.country,
                                            email:this.state.form.email };
        // var formBk = {
        //     title:formItem.title,
            // first:formItem.first,
            // last:formItem.last,
            // suffix:formItem.suffix,
            // add1:formItem.add1,
            // add2:formItem.add2,
            // city:formItem.city,
            // state:formItem.state,
            // post:formItem.post,
            // country:formItem.country,
            // email:formItem.email
        // }
        this.setState({forms: formsBk});
        this.setState({isFirst:false});
        this.setState({ isPrevPg: true });
        // var formsBackup=[...this.state.forms];
        // var a= formsBackup[this.state.indexEdited].push(this.state.form);
        // this.setState({form: a});
        this.setState({indexEdited:-1});
        
    }
  else{
       this.addRow();
       this.setState({isFirst:false});
       this.setState({ isPrevPg: true });
  }

}
onClickOfBack=()=>{
    this.setState({isFirst:true});
    this.setState({ isPrevPg: false });
}
onClickOfNext=()=>{
   //this.setState({isFirst:true});
    this.setState({ isPrevPg: false });
    this.setState({isPage3:true});
    
}
onClickOfDone=()=>{
    this.setState({isFirst:true});
    this.setState({ isPage3: false });
}
codeOptimise=(index)=>{
    // get the forms [index]
    // set to individual form keys
    // this.setState()

    if(index!=-1 && index != undefined && index!= null) {
        var formsBk = [...this.state.forms];
        var formItem = formsBk[index];
        // this.state.form.state = formItem.state;
        // var formBk = JSON.parse(JSON.stringify(this.state.form));
        var formBk = {
            
            title:formItem.title,
            first:formItem.first,
            last:formItem.last,
            suffix:formItem.suffix,
            add1:formItem.add1,
            add2:formItem.add2,
            city:formItem.city,
            state:formItem.state,
            post:formItem.post,
            country:formItem.country,
            email:formItem.email
        }
        this.setState({form: formBk});
    }
    
    return(
        <>
        <div>
             {/* <h1>{JSON.stringify(this.state.form[0])}</h1> */}
            <div>
                  <label>Name<span style={{color:'red',fontSize: '15px'}}>*</span></label>
            </div>
             <span className="titleClass">
                 <input type="text" name="title" Size="6px" id="titleid" placeholder="" onChange={this.handleChangeInput} value={this.state.form.title} disabled={this.state.isPrevPg}/>
                 <span id="titleidMsg"></span> {this.state.form.title==''&&this.state.submitted==true?"cannot be empty":""}
                 {/* <span style={this.state.isDisplay?{display:'show'}:{display:'none'}}> title cannot be empty</span> */}
             </span>
             <span className="firstClass">
                 <input type="text" name="first" Size="15px" id="firstid" placeholder="First Name" onChange={this.handleChangeInput} value={this.state.form.first} disabled={this.state.isPrevPg}/>
                 <span id="firstidMsg"></span>{this.state.form.first==''&&this.state.submitted==true? "first cannot be empty": ""} 
             </span> 
              <span className="lastClass">
                  <input type="text" name="last"  Size="15px" id="lastid" placeholder="Last Name" onChange={this.handleChangeInput} value={this.state.form.last} disabled={this.state.isPrevPg}/>
                  <span id="lastidMsg"></span>{this.state.form.last==''&&this.state.submitted==true? "last cannot be empty": ""} 
              </span> 
             <span className="suffixClass"> 
                   <input type="text" name="suffix"  Size="6px" id="suffixid" placeholder="Suffix" onChange={this.handleChangeInput} value={this.state.form.suffix} disabled={this.state.isPrevPg}/>
                   <span id="suffixidMsg"></span>{this.state.form.suffix==''&&this.state.submitted==true? "suffix cannot be empty": ""} 
             </span> 
     </div>
     
      <div>
          <span className="titleClass">{this.state.form.title}</span>
          <span className="firstClass">{this.state.form.first}</span>  
          <span className="lastClass">{this.state.form.last}</span>  
          <span className="suffixClass">{this.state.form.suffix}</span>     
    </div>
    <div>
        <label>Address<span style={{color:'red',fontSize: '15px'}}>*</span></label>
    </div>
    <div>
        <input type="text" id="street_address" name="add1" Size="73px"  onChange={(ev) =>this.handleChangeInput(ev)} value={this.state.form.add1} disabled={this.state.isPrevPg}/>{this.state.form.add1==''&&this.state.submitted==true? "Address field cannot be empty": ""}<p>{this.state.form.add1}</p>
        <input type="text" id="addressline2" name="add2" Size="73px" onChange={(ev) =>this.handleChangeInput(ev)} value={this.state.form.add2} disabled={this.state.isPrevPg}/>{this.state.form.add2==''&&this.state.submitted==true? "Address field cannot be empty": ""}<p>{this.state.form.add2}</p>
    </div>
    <div>
        <span className="city"><input type="text" name="city" id="city" Size="35px" onChange={this.handleChangeInput} value={this.state.form.city} disabled={this.state.isPrevPg}/></span>{this.state.form.city==''&&this.state.submitted==true? "City cannot be empty": ""}
        <span className="state"><input type="text" name="state" id="state" Size="35px" onChange={this.handleChangeInput} value={this.state.form.state} disabled={this.state.isPrevPg}/></span>{this.state.form.state==''&&this.state.submitted==true? "State cannot be empty": ""}
    </div>
    <div>
        <span className="city">{this.state.form.city}</span>    
        <span className="state">{this.state.form.state}</span>
    </div>
    <div>
       <span className="postal"><input type="text" id="postal" name="post" Size="35px" onChange={this.handleChangeInput} value={this.state.form.post} disabled={this.state.isPrevPg}/></span>{this.state.form.post==''&&this.state.submitted==true? "Postal cannot be empty": ""}
       <span className="country" >
           <select id="dropdown" onChange={this.handleChangeInput} name="country"  value={this.state.form.country} style={{width:'215px'}} disabled={this.state.isPrevPg}>
                <option id="o1" value="india">India</option>
                <option id="o2" value="us">US</option>
                <option id="o3" value="uk">UK</option>
                <option id="o4" value="brazil">Brazil</option>
        </select>
        </span>
    </div>
    
    <div>
        <span className="postal">{this.state.form.post}</span>
        <span className="country">{this.state.form.country}</span>
    </div>
    
        <div>
        <div><label>Email<span style={{color:'red',fontSize: '15px'}}>*</span></label></div>
        <input type="text" name="email" id="email" value={this.state.form.email}  onChange={this.handleChangeInput} Size="40px"  disabled={this.state.isPrevPg}/>{this.state.form.email==''&&this.state.submitted==true? "Email cannot be empty": ""}<p>{this.state.form.email}</p>
    </div>
        </>
    )
}

firstPage=(index)=>{
    
    return(
       <>
       <div>
             <h1>{this.state.header}</h1>
             <h4>{this.state.sub}</h4><hr></hr>
        </div>
        
        {this.state.isCode ? this.codeOptimise(index):""}
        <div><input type="button" value="Submit"  onClick={this.onClickOfSubmit} disabled={!this.state.enabled}/> </div>
       </>
   )
}
previewPage = () => {
    return(
        <>
        <div>
            <h1>Workshop Preview</h1>
            <h4>Register now while seats are available!</h4><hr/>
        </div>
        {this.state.isCode ? this.codeOptimise():""}
        <div>
            <input type="button" value="Back" onClick={this.onClickOfBack}/> 
            <input type="button" value="Next" onClick={this.onClickOfNext}/>
        </div>
        </>
    )
}
tablePage = () => {
    return(
        <>
        <h1>Workshop Registration Details</h1>
           <table id="t01">
               <thead>
                  <tr>
                    <th colSpan="4" id="n">Name</th>
                    <th colSpan="6" id="a">Address</th>
                    <th rowSpan="2" id="e">Email</th>
                    <th rowSpan="2" id="action">Action</th>
                  </tr>
                  <tr>
                    <th id="n1">Title</th>
                    <th id="n2">First</th>
                    <th id="n3">Last</th>
                    <th id="n4">Suffix</th>
                    <th id="a1">Address1</th>
                    <th id="a2">Line 2</th>
                    <th id="a3">City</th>
                    <th id="a4">State</th>
                    <th id="a5">Postal Code</th>
                    <th id="a6">Country</th>
                  </tr>
               </thead>
               <tbody>
                {  
                  this.state.forms.map((link, index) => {     
                    return (
                    <tr>
                    <td key={link.title}>{link.title}</td>
                    <td key={link.first}>{link.first}</td>
                    <td key={link.last}>{link.last}</td>
                    <td key={link.suffix}>{link.suffix}</td>
                    <td key={link.add1}>{link.add1}</td>
                    <td key={link.add2}>{link.add2}</td>
                    <td key={link.city}>{link.city}</td>
                    <td key={link.state}>{link.state}</td>
                    <td key={link.post}>{link.post}</td>
                    <td key={link.country}>{link.country}</td>
                    <td key={link.email}>{link.email}</td>
                    <td>
                        <button type="button" onClick={()=>this.onClickOfEdit(index)}>Edit</button>
                        <button type="button" onClick={()=>this.onClickOfDelete(index)}>Delete</button>
                    </td>
                    </tr>
                    )
                 })
                }
              </tbody>
           </table>
           <div> <input type="button" value="Done" onClick={this.onClickOfDone}/><span style={this.state.form.title.value? {} :{ display: 'none' } }>cannot be empty</span></div>
        </>
    )
} 
onClickOfEdit=(index)=>{
    //{this.state.isFirst ?this.firstPage(index) : ""}
    // go to first page -> funcction : <- Para (index)
    this.setState({ isPage3: false });
    this.setState({isFirst:true});
    this.firstPage(index);
    this.setState({indexEdited:index});
    
}
onClickOfDelete=(index)=>{
    //alert(this.state.forms);
    var delRow = [...this.state.forms];
    delRow.splice(index, 1);
    this.setState({forms: delRow});
}
  render() {
    
    return (
    
<div className="App">
      <body>
       <form>
         <div>
            <header className="wufoo">
                <img src={logo.png} alt="WUFOO"/>
            </header>
            </div>
    <div id="a">
         {this.state.isFirst ?this.firstPage() : ""}
     </div>

   <div id="b">
        {this.state.isPrevPg ? this.previewPage(): ""} 
   </div>

   <div id="c">
    {this.state.isPage3 ? this.tablePage(): ""}  
   </div>

</form>
</body>
</div>
);
}
}

export default App;

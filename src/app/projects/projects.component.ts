import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
   text:string ='';
   condition:boolean=false;
   condition2:boolean=false;
   condition3:boolean=false;
   condition4:boolean=false;
   kepek: string[] = [''];
  ngOnInit() {
      

  }
  constructor(private _router:Router){}
  onBack(): void{
    this._router.navigate(['/about']);
  }
 

  Multitool(){
    this.kepek=['assets/images/kozf1.png','assets/images/bevAngular.png','assets/images/orvosired.png','assets/images/AngularChart.png'];
    this.condition=true;
    this.condition2=false;
    this.condition3=false;
    this.condition4=false;
    this.text="(Note: The design is created by Creative Tim from creative-tim.com)\n \n This web application was created as a ‘hub’ or ‘collector’ for all my previous projects. For backend, it uses Google’s Firestore firebase cloud database, and the frontend part is done in Angular and CSS Bootstrap.\n \n Upon successful login (the login is done with firebase authentication), the user is greeted with the dashboard. From here, the user can navigate to their application on the left sidebar. For example, the data that is uploaded from the income calculator can be viewed here, for easier access. \n \n There are also a list of employees, with their personal data, along with a button which opens their respective work contract pdf. You can also filter out the employees whose medical checkup will soon expire, their cells are marked with a red background.\n \n The source code can be viewed on github. Some parts of the project were removed for security reasons.( https://github.com/bakenNNN/AngularMultitool )";

    
    return this.kepek, this.text,this.condition,this.condition2,this.condition3,this.condition4;
    
}

  IncomeCalc(){
    this.kepek=['assets/images/bevprogpics/imports.png','assets/images/bevprogpics/firstpart.png','assets/images/bevprogpics/SaveAndLoad.png','assets/images/bevprogpics/variablesIn.png','assets/images/bevprogpics/layout1.png','assets/images/bevprogpics/bevprog1stscreen.png','assets/images/bevprogpics/BevProgFlowchart.png','assets/images/bevprogpics/loops.png','assets/images/bevprogpics/bevprogtabla1.png','assets/images/bevprogpics/bevprogallcolumns.png','assets/images/bevprogpics/Calc1.png','assets/images/bevprogpics/Calc2.png','assets/images/bevprogpics/bevprogloadingscreen.png','assets/images/bevprogpics/bevprogdone1.png','assets/images/bevprogpics/bevprogdone2.png','assets/images/bevprogpics/bevprogdone3.png'];
    this.condition=false;
    this.condition2=false;
    this.condition3=false;
    this.condition4=true;
    this.text="The source code can be viewed on: \n \n https://github.com/bakenNNN/PyIncomeCalc\n/blob/main/bevetelprog.py \n \n The purpose of this application is making the monthly income report more efficient, and more accurate. In short, the program lists all the items sold ordered by date, separated into three columns. The first column is only for the first column of the datatable, the second column is for every other item. The last column is for calculations based on .txt variables. \n \n A few imports are needed. Pandas is used for working with excel sheets and dataframes, and PySimpleGUI for a simple user interface. We need pickle for saving the end result, and firebase for uploading the data to the cloud, this data is accessed later by the Angular multitool app, for easier accessibility. \n \n There is a save and load class, which greatly reduces load times, by saving the final layout into a .pickle file. On the second start of the application, the existence of a .pickle file is checked, and if it exists, the app loads in instantly with all the data. If it does not, the program runs normally. The downside of this method is, the .pickle file has to be deleted on every occasion the excel data is updated. \n \n After clicking Ok, all the .txt files are read, and the variables are saved inside the arrays. The variables are saved in the txt file, simply because of easier modification and access to them. \n \n Below is the Flowchart of the program. There are 3 main loops checking the data. The first loop is just adding up all the rows, the second checks every date in the date column, the third loop checks every 6 th column, which is the point-of-reference. Finally, the fourth loop checks every row for the data. \n \n The items are sorted, based on what category they belong to. There are 6 categories, for example Lekvár or Paprikakrém. For example, if in the table we have 3 jars of zakuszka, which costs 1000 HUF/jar, then the program will do the calculation (3x0,72=2,16 kg) and add up the cost,append the date and receipt number. In the end, the result will be something like this: \n \n 2000.01.01, ABC-123-456, Paprikakrém, 2,16kg, 3000HUF \n \n This process completely eliminates the need to do theese calculations manually, greatly reducing the time needed for the monthly income report. \n \n Below you can find how the app looks like when loading is done, or it is loaded in from the .picke file. On the left, we have the savanyito named columns items, on the right the calculations. All the months are available as tabs on the top. \n \n If a tab is right-clicked, the rest of the items are available on the left column. \n \n";

    
    return this.kepek, this.text,this.condition,this.condition2,this.condition3,this.condition4;
    

  }
  ExToFirebase(){
    this.kepek=['assets/images/ExToFbPics/firebaseupload1.png','assets/images/ExToFbPics/firebaseupload2.png','assets/images/ExToFbPics/firebaseuploadError.png','assets/images/ExToFbPics/firebaseuploadError2.png','assets/images/ExToFbPics/firebaseupload3.png','assets/images/ExToFbPics/firebaseupload4.png','assets/images/ExToFbPics/ExtoFbUploadChart.png',];
    this.condition=true;
    this.condition2=false;
    this.condition3=false;
    this.condition4=false;
    this.text="The code can be viewed on: \n \n https://github.com/bakenNNN/ExToFirebase\n/blob/main/PyExToFirebase.py \n \n This application was specifically created for uploading large amounts of data from Excel files to the firestore database in real-time. This data is then read by the Angular multitool.(See documentation to the left.)\n \n (Note: This code is not necessarily complicated, I just wanted to include this project in the documentation collection to show my improvement in code writing, specifically clean coding.) \n \n  The first part of the app has the necessary imports, such as PySimpleGUI for the user interface, the pandas library for the Excel data manipulation, and firebase for the firebase SDK. The function ’have_firebase’ checks if firebase servers are available, and ’have_internet’ checks if the user has an internet connection.\n \n The second part of the code defines the layout of the user interface, mostly composed of status messages. If the user does not have internet, or the firebase servers are down, an error message will show. \n \n Else if everything is working, this screen will show OK status messages. \n \n the first input field requires the user to define the function, for indication to where upload the Excel data. For example, if the user inputs ’Gyermekvedelem’, then the data will be uploaded to a predefined collection, with predefined document name, and field names. The next two input fields are for targeting a specific collection, or a specific document(Ex. the user wants a new collection, but with the same document and field names). The last input field is for selecting the data source file. \n \n In the third part of the code the create collection functions are defined, with the field names. If the user inputs a nonexistent function name, the application also throws an error. After the functions are defined, the upload loop starts. Looping through each row in the Excel file,the values are assigned to the variables, and finally the create collection function is called, with the newly assigned data. \n \n";

    
    return this.kepek, this.text,this.condition,this.condition2,this.condition3,this.condition4;

  }
  PocsajSEO(){
    this.kepek=['assets/images/googSearchConsole.png','assets/images/sitemap.png'];
    this.condition=false;
    this.condition2=false;
    this.condition3=false;
    this.condition4=true;
    this.text="Pocsaj.hu Search Engine Optimization \n \n One of my tasks was improving the SEO of Pocsaj.hu, which was not even on the 5 th page when searching for pocsaj, or pocsaj.hu. In fact, the website was not even indexed. \n \n The first step was identifying the problem. There were numerous issues, such as HTTPS was not enforced, when trying to enter the site ERR_TOO_MANY_REDIRECTS error was showing, etc. \n \n The second step was registering the website on Google Search Console. This tool also helps in identifying more problems, and above all you can also request the indexing.  \n \n As you can see on the picture below, the point when the issues were resolved and the website was indexed again is clearly shown in the chart.  \n \n The next step was creating a sitemap, which helps the search engines when crawling the website. This sitemap’s link was uploaded to the Sitemap menu point in the Search Console. A favicon was also added.  \n \n Next was enforcing HTTPS, and removing www for a cleaner look. The webhost uses Apache, so this is done simply in the .htaccess file, by adding the following code:  \n \n RewriteEngine On  \n \n RewriteBase /  \n \n RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]  \n \n RewriteRule ^(.*)$ https://%1/$1 [R=301,L]  \n \n The next step was solving the redirect loop problem. With the help of Chrome’s Lighthouse tool, and a few other scanner tools, the cause was discovered, which was a language Joomla plugin. It was redirecting the main .hu site to a .hu/en version, which was redirecting back to the .hu site, thus creating a redirect loop. By disabling this plugin, the issue was solved.  \n \n The final step was requesting indexing on the Search Console, and in a few days the result could already be seen.";

    
   return this.kepek, this.text,this.condition,this.condition2,this.condition3,this.condition4;

  }
  

}

# SportsEvents-BackEnd

## Application Contract

### Root Host  
http://localhost:PORT/

### Headers
{  
    Content-Type: "application/json"  
}  

### Teams 

**Schema**   
{  
    "_id": ObjectID,  
    "name": "Example Name",  
    "shortName": "EgName",  
    "createDate": "12/11/2017"  
}    

[GET]  
**/teams/**  
Return all the teams collection as JSON  

[GET]  
**/teams/:id**  
Find and return one team as JSON  

[PUT]  
**/teams/**  
If the team is new insert to DB, else update it by _id  

[DELETE]  
**/teams/:id**  
Delete one team by _id  


### Matchs  

**Schema**   
{    
    "_id": ObjectID,  
    "teams": [{},{}],  
    "status": "Not Started",  
    "startDate": "12/11/2017"  
}      

[GET]  
**/matchs/:id**  
Find and return one match as JSON  

[GET]  
**/matchs/**  
*Param: inProgress=bool filter or not only "In Progress" matchs.*    
*Param: populate=bool populate or not teams data into match object.*  
Return matches collection for a specific status  

[PUT]  
**/matchs/**   
If the match is new insert to DB, else update it by _id  

[DELETE]  
**/matchs/:id**  
Delete one match by _id

### Events

**Schema**   
{  
    "_id": ObjectID,      
    "createDate":"12/11/2017",  
    "eventType":"Start",  
    "match":ObjectID  
}         

[GET]  
**/events/:matchId**  
Return all the events of a match  

[PUT]  
**/events/**  
Insert a new Event into the collection  






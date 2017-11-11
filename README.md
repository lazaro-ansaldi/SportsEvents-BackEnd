# SportsEvents-BackEnd

## Application Contract


### Teams 

[GET]
**/teams/**
Return all the teams collection as JSON

[GET]
**/teams/:id**
Find and return one team as JSON

[PUT]
**/teams/**
*Content-Type: "application/json"*
If the team is new insert to DB, else update it by _id

[DELETE]
**/teams/:id**
Delete one team by _id


### Matchs
    
[GET]  
**/matchs/:id**  
Find and return one match as JSON  

[GET]  
**/matchs/**  
*Params: inProgress=true filter only "In Progress" matchs.*  
Return matches collection for a specific status  

[PUT]  
**/matchs/**  
*Content-Type: "application/json"*  
If the match is new insert to DB, else update it by _id  

[DELETE]  
**/matchs/:id**  
Delete one match by _id  



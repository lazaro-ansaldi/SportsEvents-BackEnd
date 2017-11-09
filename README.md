# SportsEvents-BackEnd

##Application Contract


###Teams###

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


###Matches###

[GET]
**/matches/:id**
Find and return one match as JSON

[GET]
**/matches/:status**
Find a matches collection for a specific status

[PUT]
**/matches/**
*Content-Type: "application/json"*
If the matche is new insert to DB, else update it by _id

[DELETE]
**/matches/:id**
Delete one match by _id



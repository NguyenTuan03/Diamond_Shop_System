CREATE TABLE [dbo].[customer]
(
  [Id] int IDENTITY(1,1),
  [Name] NVARCHAR(255)  not NULL,
  [age] INT,
  [address] NVARCHAR(255) not NULL
)
insert into [dbo].[customer] (id,name,age,address) 
values (1,'tuan',12,'HCM')
SELECT * FROM [dbo].[customer]
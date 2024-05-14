SET NOCOUNT ON
USE master
GO

IF exists (select * from sysdatabases where name='diamond')
BEGIN
  RAISERROR('Dropping existing diamond database ....',0,1)
  DROP database diamond
END
GO

CHECKPOINT
GO

RAISERROR('Creating diamond database....',0,1)
GO
   CREATE DATABASE diamond
GO

CHECKPOINT
GO

USE diamond
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

/*Create account*/
CREATE TABLE [dbo].[Account](
	[Id] [int] IDENTITY(1,1),
	[Name] [varchar](255) NOT NULL,
	[Address] [nvarchar](255) NOT NULL,
	[Age] [int] NOT NULL,
CONSTRAINT [PK_Account] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

SET IDENTITY_INSERT [Account] ON;
INSERT INTO [Account] ([Id],[Name],[Address],[Age])
VALUES (1,'Tuan','HCM',20)
SET IDENTITY_INSERT [Account] OFF;
Select * from Account

DROP TABLE [Account];
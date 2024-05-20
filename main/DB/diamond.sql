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
CREATE TABLE [dbo].[Account] (
    [Id] INT IDENTITY(1,1) PRIMARY KEY,
	[Firstname] NVARCHAR(255) NOT NULL,
    [Lastname] NVARCHAR(255) NOT NULL,
    [Username] NVARCHAR(255),
    [Email] VARCHAR(255) NOT NULL,
    [Password] CHAR(64) NOT NULL,
    [Accountrole] VARCHAR(255) NOT NULL,
    [Locked] BIT DEFAULT 0,
    [Enabled] BIT DEFAULT 0
);
GO
SET IDENTITY_INSERT [Account] ON;

CREATE TABLE [dbo].[Confirmation_token] (
    [Id] INT IDENTITY(1,1) PRIMARY KEY,
	[Token] NVARCHAR(255) NOT NULL DEFAULT 0,
    [Created_at] NVARCHAR(255) NOT NULL DEFAULT 0,
    [Expired_at] NVARCHAR(255) DEFAULT 0,
    [Confirmed_at] DATETIME,
    [Account_id] INT NOT NULL,
    FOREIGN KEY ([Account_id]) REFERENCES [Account]([Id])
);
Go



/*INSERT INTO [Account] ([Name],[UserName],[Email], [Password], [Role], [Locked],[Enabled])
VALUES () 


Select * from Account

Drop table Account */
select * from Account
select * from Confirmation_token
Delete Account where Id = 26
Delete Confirmation_token where Id = 1
UPDATE Account SET Enabled = 1 WHERE email = 'nguyenanhtuan.1495@gmail.com'






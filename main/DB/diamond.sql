
Create DAtabase Diamond
USE [Diamond]
GO
/****** Object:  Table [dbo].[Certificate]    Script Date: 24/05/2024 4:07:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Certificate](
	[Certificate_Id] [varchar](50) NOT NULL,
	[Valuation_Result_Id] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Certificate] PRIMARY KEY CLUSTERED 
(
	[Certificate_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Commitment_Letter]    Script Date: 24/05/2024 4:07:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Commitment_Letter](
	[Commitment_Letter_Id] [varchar](50) NOT NULL,
	[Valuation_Result_Id] [varchar](50) NOT NULL,
	[User_Id] [varchar](50) NOT NULL,
	[Create_Date] [date] NOT NULL,
	[Description] [varchar](50) NOT NULL,
	[Approved_By_Manager] [bit] NOT NULL,
 CONSTRAINT [PK_Commitment_Letter] PRIMARY KEY CLUSTERED 
(
	[Commitment_Letter_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Processes]    Script Date: 24/05/2024 4:07:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Processes](
	[Processes_Id] [varchar](50) NOT NULL,
	[Create_date] [date] NOT NULL,
 CONSTRAINT [PK_Processes] PRIMARY KEY CLUSTERED 
(
	[Processes_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Processes_User]    Script Date: 24/05/2024 4:07:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Processes_User](
	[User_Id] [varchar](50) NOT NULL,
	[Processes_Id] [varchar](50) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Role]    Script Date: 24/05/2024 4:07:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Role](
	[Role_Id] [varchar](50) NOT NULL,
	[Name_Role] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Role] PRIMARY KEY CLUSTERED 
(
	[Role_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sealing_Letter]    Script Date: 24/05/2024 4:07:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sealing_Letter](
	[Sealing_Letter_Id] [varchar](50) NOT NULL,
	[User_Id] [varchar](50) NOT NULL,
	[Valuation_Result_Id] [varchar](50) NOT NULL,
	[Created_Date] [date] NOT NULL,
	[Approve_By_Manager] [bit] NOT NULL,
 CONSTRAINT [PK_Sealing_Letter] PRIMARY KEY CLUSTERED 
(
	[Sealing_Letter_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Service]    Script Date: 24/05/2024 4:07:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Service](
	[Service_Id] [varchar](50) NOT NULL,
	[Valuation_Price] [float] NOT NULL,
	[Valuation_Time] [date] NOT NULL,
 CONSTRAINT [PK_Service] PRIMARY KEY CLUSTERED 
(
	[Service_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Statistic]    Script Date: 24/05/2024 4:07:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Statistic](
	[Statistic_Id] [varchar](50) NOT NULL,
	[Valuation_Result_Id] [varchar](50) NOT NULL,
	[Service_Id] [varchar](50) NOT NULL,
	[Date] [date] NOT NULL,
	[Status] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Statistic] PRIMARY KEY CLUSTERED 
(
	[Statistic_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 24/05/2024 4:07:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[User_Id] [varchar](50) NOT NULL,
	[Role_Id] [varchar](50) NOT NULL,
	[User_Name] [varchar](50) NOT NULL,
	[Password] [varchar](50) NOT NULL,
	[Full_Name] [varchar](50) NOT NULL,
	[Email] [varchar](50) NOT NULL,
	[Phone] [varchar](50) NOT NULL,
	[Address] [varchar](50) NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[User_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Valuation_Request]    Script Date: 24/05/2024 4:07:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Valuation_Request](
	[Valuation_Request_Id] [varchar](50) NOT NULL,
	[User_Id] [varchar](50) NOT NULL,
	[Service_Id] [varchar](50) NOT NULL,
	[Create_Date] [date] NOT NULL,
	[Status] [varchar](50) NOT NULL,
	[Notes] [varchar](50) NOT NULL,
	[Date] [date] NOT NULL,
 CONSTRAINT [PK_Valuation_Request] PRIMARY KEY CLUSTERED 
(
	[Valuation_Request_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Valuation_Result]    Script Date: 24/05/2024 4:07:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Valuation_Result](
	[Valuation_Result_Id] [varchar](50) NOT NULL,
	[Valuation_Request_Id] [varchar](50) NOT NULL,
	[User_Id] [varchar](50) NOT NULL,
	[Create_Date] [date] NOT NULL,
	[Origin] [varchar](50) NOT NULL,
	[Shape] [float] NOT NULL,
	[Carat_weight] [float] NOT NULL,
	[Color] [float] NOT NULL,
	[Cut] [float] NOT NULL,
	[Clarity] [float] NOT NULL,
	[Measurements] [float] NOT NULL,
	[Polish] [float] NOT NULL,
	[Symmetry] [float] NOT NULL,
	[Flourescence] [float] NOT NULL,
	[Proportions] [float] NOT NULL,
 CONSTRAINT [PK_a] PRIMARY KEY CLUSTERED 
(
	[Valuation_Result_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Certificate]  WITH CHECK ADD  CONSTRAINT [FK_Certificate_Valuation_Result] FOREIGN KEY([Valuation_Result_Id])
REFERENCES [dbo].[Valuation_Result] ([Valuation_Result_Id])
GO
ALTER TABLE [dbo].[Certificate] CHECK CONSTRAINT [FK_Certificate_Valuation_Result]
GO
ALTER TABLE [dbo].[Commitment_Letter]  WITH CHECK ADD  CONSTRAINT [FK_Commitment_Letter_User] FOREIGN KEY([User_Id])
REFERENCES [dbo].[User] ([User_Id])
GO
ALTER TABLE [dbo].[Commitment_Letter] CHECK CONSTRAINT [FK_Commitment_Letter_User]
GO
ALTER TABLE [dbo].[Commitment_Letter]  WITH CHECK ADD  CONSTRAINT [FK_Commitment_Letter_Valuation_Result] FOREIGN KEY([Valuation_Result_Id])
REFERENCES [dbo].[Valuation_Result] ([Valuation_Result_Id])
GO
ALTER TABLE [dbo].[Commitment_Letter] CHECK CONSTRAINT [FK_Commitment_Letter_Valuation_Result]
GO
ALTER TABLE [dbo].[Processes_User]  WITH CHECK ADD  CONSTRAINT [FK_Processes_User_Processes] FOREIGN KEY([Processes_Id])
REFERENCES [dbo].[Processes] ([Processes_Id])
GO
ALTER TABLE [dbo].[Processes_User] CHECK CONSTRAINT [FK_Processes_User_Processes]
GO
ALTER TABLE [dbo].[Processes_User]  WITH CHECK ADD  CONSTRAINT [FK_Processes_User_User] FOREIGN KEY([User_Id])
REFERENCES [dbo].[User] ([User_Id])
GO
ALTER TABLE [dbo].[Processes_User] CHECK CONSTRAINT [FK_Processes_User_User]
GO
ALTER TABLE [dbo].[Sealing_Letter]  WITH CHECK ADD  CONSTRAINT [FK_Sealing_Letter_User] FOREIGN KEY([User_Id])
REFERENCES [dbo].[User] ([User_Id])
GO
ALTER TABLE [dbo].[Sealing_Letter] CHECK CONSTRAINT [FK_Sealing_Letter_User]
GO
ALTER TABLE [dbo].[Sealing_Letter]  WITH CHECK ADD  CONSTRAINT [FK_Sealing_Letter_Valuation_Result] FOREIGN KEY([Valuation_Result_Id])
REFERENCES [dbo].[Valuation_Result] ([Valuation_Result_Id])
GO
ALTER TABLE [dbo].[Sealing_Letter] CHECK CONSTRAINT [FK_Sealing_Letter_Valuation_Result]
GO
ALTER TABLE [dbo].[Statistic]  WITH CHECK ADD  CONSTRAINT [FK_Statistic_Service] FOREIGN KEY([Service_Id])
REFERENCES [dbo].[Service] ([Service_Id])
GO
ALTER TABLE [dbo].[Statistic] CHECK CONSTRAINT [FK_Statistic_Service]
GO
ALTER TABLE [dbo].[Statistic]  WITH CHECK ADD  CONSTRAINT [FK_Statistic_Valuation_Result] FOREIGN KEY([Valuation_Result_Id])
REFERENCES [dbo].[Valuation_Result] ([Valuation_Result_Id])
GO
ALTER TABLE [dbo].[Statistic] CHECK CONSTRAINT [FK_Statistic_Valuation_Result]
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Role] FOREIGN KEY([Role_Id])
REFERENCES [dbo].[Role] ([Role_Id])
GO
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Role]
GO
ALTER TABLE [dbo].[Valuation_Request]  WITH CHECK ADD  CONSTRAINT [FK_Valuation_Request_Service] FOREIGN KEY([Service_Id])
REFERENCES [dbo].[Service] ([Service_Id])
GO
ALTER TABLE [dbo].[Valuation_Request] CHECK CONSTRAINT [FK_Valuation_Request_Service]
GO
ALTER TABLE [dbo].[Valuation_Request]  WITH CHECK ADD  CONSTRAINT [FK_Valuation_Request_User] FOREIGN KEY([User_Id])
REFERENCES [dbo].[User] ([User_Id])
GO
ALTER TABLE [dbo].[Valuation_Request] CHECK CONSTRAINT [FK_Valuation_Request_User]
GO
ALTER TABLE [dbo].[Valuation_Result]  WITH CHECK ADD  CONSTRAINT [FK_Valuation_Result_User] FOREIGN KEY([User_Id])
REFERENCES [dbo].[User] ([User_Id])
GO
ALTER TABLE [dbo].[Valuation_Result] CHECK CONSTRAINT [FK_Valuation_Result_User]
GO
ALTER TABLE [dbo].[Valuation_Result]  WITH CHECK ADD  CONSTRAINT [FK_Valuation_Result_Valuation_Request] FOREIGN KEY([Valuation_Request_Id])
REFERENCES [dbo].[Valuation_Request] ([Valuation_Request_Id])
GO
ALTER TABLE [dbo].[Valuation_Result] CHECK CONSTRAINT [FK_Valuation_Result_Valuation_Request]
GO

Select * from [User]
USE [Diamond]
GO
/****** Object:  Table [dbo].[Certificate]    Script Date: 25/05/2024 2:42:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Certificate](
	[Certificate_id] [int] IDENTITY(1,1) NOT NULL,
	[Valuation_result_id] [int] NOT NULL,
 CONSTRAINT [PK_Certificate] PRIMARY KEY CLUSTERED 
(
	[Certificate_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Commitment_letter]    Script Date: 25/05/2024 2:42:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Commitment_letter](
	[Commitment_letter_id] [int] IDENTITY(1,1) NOT NULL,
	[Valuation_result_id] [int] NOT NULL,
	[User_id] [int] NOT NULL,
	[Create_date] [date] NOT NULL,
	[Description] [varchar](255) NOT NULL,
	[Approved_by_manager] [bit] NOT NULL,
 CONSTRAINT [PK_Commitment_Letter] PRIMARY KEY CLUSTERED 
(
	[Commitment_letter_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Processes]    Script Date: 25/05/2024 2:42:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Processes](
	[Processes_id] [int] IDENTITY(1,1) NOT NULL,
	[Create_date] [date] NOT NULL,
 CONSTRAINT [PK_Processes] PRIMARY KEY CLUSTERED 
(
	[Processes_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Processes_user]    Script Date: 25/05/2024 2:42:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Processes_user](
	[User_id] [int] IDENTITY(1,1) NOT NULL,
	[Processes_id] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Role]    Script Date: 25/05/2024 2:42:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Role](
	[Role_id] [int] IDENTITY(1,1) NOT NULL,
	[Name_role] [varchar](255) NOT NULL,
 CONSTRAINT [PK_Role] PRIMARY KEY CLUSTERED 
(
	[Role_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sealing_Uetter]    Script Date: 25/05/2024 2:42:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sealing_Uetter](
	[Sealing_letter_id] [int] IDENTITY(1,1) NOT NULL,
	[User_id] [int] NOT NULL,
	[Valuation_result_id] [int] NOT NULL,
	[Created_date] [date] NOT NULL,
	[Approve_by_manager] [bit] NOT NULL,
 CONSTRAINT [PK_Sealing_Letter] PRIMARY KEY CLUSTERED 
(
	[Sealing_letter_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Service]    Script Date: 25/05/2024 2:42:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Service](
	[Service_id] [int] IDENTITY(1,1) NOT NULL,
	[Valuation_price] [float] NOT NULL,
	[Valuation_time] [date] NOT NULL,
 CONSTRAINT [PK_Service] PRIMARY KEY CLUSTERED 
(
	[Service_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Statistic]    Script Date: 25/05/2024 2:42:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Statistic](
	[Statistic_id] [int] NOT NULL,
	[Valuation_result_id] [int] IDENTITY(1,1) NOT NULL,
	[Service_id] [int] NOT NULL,
	[Date] [date] NOT NULL,
	[Status] [varchar](255) NOT NULL,
 CONSTRAINT [PK_Statistic] PRIMARY KEY CLUSTERED 
(
	[Statistic_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 25/05/2024 2:42:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[User_id] [int] IDENTITY(1,1) NOT NULL,
	[Role_id] [int] NOT NULL,
	[User_name] [nvarchar](255) NOT NULL,
	[Password] [varchar](255) NOT NULL,
	[Full_name] [varchar](255) NOT NULL,
	[Email] [varchar](255) NULL,
	[Phone] [varchar](255) NOT NULL,
	[Address] [nvarchar](255) NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[User_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Valuation_request]    Script Date: 25/05/2024 2:42:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Valuation_request](
	[Valuation_request_id] [int] IDENTITY(1,1) NOT NULL,
	[User_id] [int] NOT NULL,
	[Service_id] [int] NOT NULL,
	[Create_date] [date] NOT NULL,
	[Status] [varchar](255) NOT NULL,
	[Notes] [varchar](255) NOT NULL,
	[Date] [date] NOT NULL,
 CONSTRAINT [PK_Valuation_Request] PRIMARY KEY CLUSTERED 
(
	[Valuation_request_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Valuation_result]    Script Date: 25/05/2024 2:42:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Valuation_result](
	[Valuation_result_id] [int] IDENTITY(1,1) NOT NULL,
	[Valuation_request_id] [int] NOT NULL,
	[User_id] [int] NOT NULL,
	[Create_date] [date] NOT NULL,
	[Origin] [varchar](255) NOT NULL,
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
	[Valuation_result_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Certificate]  WITH CHECK ADD  CONSTRAINT [FK_Certificate_Valuation_Result] FOREIGN KEY([Valuation_result_id])
REFERENCES [dbo].[Valuation_result] ([Valuation_result_id])
GO
ALTER TABLE [dbo].[Certificate] CHECK CONSTRAINT [FK_Certificate_Valuation_Result]
GO
ALTER TABLE [dbo].[Commitment_letter]  WITH CHECK ADD  CONSTRAINT [FK_Commitment_Letter_User] FOREIGN KEY([User_id])
REFERENCES [dbo].[User] ([User_id])
GO
ALTER TABLE [dbo].[Commitment_letter] CHECK CONSTRAINT [FK_Commitment_Letter_User]
GO
ALTER TABLE [dbo].[Commitment_letter]  WITH CHECK ADD  CONSTRAINT [FK_Commitment_Letter_Valuation_Result] FOREIGN KEY([Valuation_result_id])
REFERENCES [dbo].[Valuation_result] ([Valuation_result_id])
GO
ALTER TABLE [dbo].[Commitment_letter] CHECK CONSTRAINT [FK_Commitment_Letter_Valuation_Result]
GO
ALTER TABLE [dbo].[Processes_user]  WITH CHECK ADD  CONSTRAINT [FK_Processes_User_Processes] FOREIGN KEY([Processes_id])
REFERENCES [dbo].[Processes] ([Processes_id])
GO
ALTER TABLE [dbo].[Processes_user] CHECK CONSTRAINT [FK_Processes_User_Processes]
GO
ALTER TABLE [dbo].[Processes_user]  WITH CHECK ADD  CONSTRAINT [FK_Processes_User_User] FOREIGN KEY([User_id])
REFERENCES [dbo].[User] ([User_id])
GO
ALTER TABLE [dbo].[Processes_user] CHECK CONSTRAINT [FK_Processes_User_User]
GO
ALTER TABLE [dbo].[Sealing_Uetter]  WITH CHECK ADD  CONSTRAINT [FK_Sealing_Letter_User] FOREIGN KEY([User_id])
REFERENCES [dbo].[User] ([User_id])
GO
ALTER TABLE [dbo].[Sealing_Uetter] CHECK CONSTRAINT [FK_Sealing_Letter_User]
GO
ALTER TABLE [dbo].[Sealing_Uetter]  WITH CHECK ADD  CONSTRAINT [FK_Sealing_Letter_Valuation_Result] FOREIGN KEY([Valuation_result_id])
REFERENCES [dbo].[Valuation_result] ([Valuation_result_id])
GO
ALTER TABLE [dbo].[Sealing_Uetter] CHECK CONSTRAINT [FK_Sealing_Letter_Valuation_Result]
GO
ALTER TABLE [dbo].[Statistic]  WITH CHECK ADD  CONSTRAINT [FK_Statistic_Service] FOREIGN KEY([Service_id])
REFERENCES [dbo].[Service] ([Service_id])
GO
ALTER TABLE [dbo].[Statistic] CHECK CONSTRAINT [FK_Statistic_Service]
GO
ALTER TABLE [dbo].[Statistic]  WITH CHECK ADD  CONSTRAINT [FK_Statistic_Valuation_Result] FOREIGN KEY([Valuation_result_id])
REFERENCES [dbo].[Valuation_result] ([Valuation_result_id])
GO
ALTER TABLE [dbo].[Statistic] CHECK CONSTRAINT [FK_Statistic_Valuation_Result]
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Role] FOREIGN KEY([Role_id])
REFERENCES [dbo].[Role] ([Role_id])
GO
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Role]
GO
ALTER TABLE [dbo].[Valuation_request]  WITH CHECK ADD  CONSTRAINT [FK_Valuation_Request_Service] FOREIGN KEY([Service_id])
REFERENCES [dbo].[Service] ([Service_id])
GO
ALTER TABLE [dbo].[Valuation_request] CHECK CONSTRAINT [FK_Valuation_Request_Service]
GO
ALTER TABLE [dbo].[Valuation_request]  WITH CHECK ADD  CONSTRAINT [FK_Valuation_Request_User] FOREIGN KEY([User_id])
REFERENCES [dbo].[User] ([User_id])
GO
ALTER TABLE [dbo].[Valuation_request] CHECK CONSTRAINT [FK_Valuation_Request_User]
GO
ALTER TABLE [dbo].[Valuation_result]  WITH CHECK ADD  CONSTRAINT [FK_Valuation_Result_User] FOREIGN KEY([User_id])
REFERENCES [dbo].[User] ([User_id])
GO
ALTER TABLE [dbo].[Valuation_result] CHECK CONSTRAINT [FK_Valuation_Result_User]
GO
ALTER TABLE [dbo].[Valuation_result]  WITH CHECK ADD  CONSTRAINT [FK_Valuation_Result_Valuation_Request] FOREIGN KEY([Valuation_request_id])
REFERENCES [dbo].[Valuation_request] ([Valuation_request_id])
GO
ALTER TABLE [dbo].[Valuation_result] CHECK CONSTRAINT [FK_Valuation_Result_Valuation_Request]
GO

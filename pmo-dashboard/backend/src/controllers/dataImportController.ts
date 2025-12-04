import { Request, Response } from 'express';
import excelParserService from '../services/excelParserService';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class DataImportController {
  public async uploadFile(req: Request, res: Response) {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    try {
      const data = excelParserService.parse(req.file.path);
      // Here you would add logic to validate and normalize the data
      // For now, we'll just log it
      console.log(data);

      // Example of how to save to the database
      // await prisma.normalizedIssueData.createMany({
      //   data: data.map((row: any) => ({
      //     source: 'excel',
      //     externalId: row['ID'],
      //     project: row['Project'],
      //     title: row['Title'],
      //     status: row['Status'],
      //     // ... map other fields
      //   })),
      // });

      await prisma.dataImportLog.create({
        data: {
          source: 'excel',
          fileName: req.file.originalname,
          status: 'success',
        },
      });

      res.status(200).send({ message: 'File uploaded and processed successfully.', data });
    } catch (error) {
      console.error(error);
      await prisma.dataImportLog.create({
        data: {
          source: 'excel',
          fileName: req.file.originalname,
          status: 'failure',
          message: error instanceof Error ? error.message : String(error),
        },
      });
      res.status(500).send('Error processing file.');
    }
  }
}

export default new DataImportController();

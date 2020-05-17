import { Request, Response } from "express";
import queryString from 'querystring';
import request from 'request';


export default async (req: Request, res: Response): Promise<void> => {
  const { attachment } = req.params;

  const queryParams = queryString.encode({
    attachedId: attachment,
    'auth[auth]': req.user.accessToken,
    action: 'download',
    ncc: 1,
  })
  const downloadUrl = `${process.env.BITRIX24_URL}/bitrix/tools/disk/uf.php?${queryParams}`;
  request(downloadUrl).pipe(res);
};

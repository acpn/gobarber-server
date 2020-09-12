import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(dat: IParseMailTemplateDTO): Promise<string>;
}

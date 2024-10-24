export interface BreadcrumbItem {
  key: string;
  labelName: string;
  path: string;
  terminalOnly?: boolean;
  afterBaseOnly?: boolean;
  pathParamList?: Array<any>;
  queryParams?: any;
  fragment?: string;
}

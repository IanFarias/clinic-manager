import Icon from '../Icon';
import Link from '../baseComponents/Link';
import * as S from './styles';

type Column = {
  field: string;
  headerName: string;
};

type Row = {
  [key: string]: string;
};

type Props = {
  columns: Column[];
  rows: Row[];
};

const TableList: React.FC<Props> = ({ columns, rows }) => {
  return (
    <S.GuardianTable>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={`table-list-header-${index}`}>
              <span>{column.headerName}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          const variant = index % 2 === 0 ? '' : 'grey';

          return (
            <tr className={variant} key={'tablelist-' + index}>
              {columns.map((column, index) => (
                <td key={`tablelist-item-${index}`}>{row[column.field]}</td>
              ))}

              <td className="options-column">
                <Link
                  variant="button"
                  variantButton="primary"
                  to={`/patients/${row['id']}`}
                  aria-label="Acessar"
                >
                  Acessar
                  <Icon icon="redirect" size={20} />
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </S.GuardianTable>
  );
};

export default TableList;

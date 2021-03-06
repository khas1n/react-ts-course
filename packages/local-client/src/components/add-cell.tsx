import { useActions } from "../hooks/use-actions";
import "./add-cell.scss";

interface AddCellProps {
  previousCellId: string | null;
  forceVisble?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ forceVisble, previousCellId }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`add-cell ${forceVisble && "force-visible"}`}>
      <div className="add-buttons">
        <button className="button is-primary is-rounded is-small" onClick={() => insertCellAfter(previousCellId, "code")}>
          <span className="is-small icon">
            <i className="fas fa-plus"></i>
          </span>
          <span>Code</span>
        </button>
        <button className="button is-primary is-rounded is-small" onClick={() => insertCellAfter(previousCellId, "text")}>
          <span className="is-small icon">
            <i className="fas fa-plus"></i>
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;

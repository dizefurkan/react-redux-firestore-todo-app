import { styled } from "src/theme";
import Close from "src/asset/svg/close";
import Edit from "src/asset/svg/md-edit";
import Check from "src/asset/svg/md-check";
import Delete from "src/asset/svg/md-delete";

export const Todo = styled.li`
  padding: 12px 0%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  margin-left: 16px;
`;

export const EditButton = styled.button`
  border: 1px solid transparent;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;

  :hover {
    border-color: ${({ theme }) => theme.input.borderColor};
  }
`;

export const EditIcon = styled(Edit)``;

export const CloseButton = styled.button`
  border: 1px solid transparent;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;

  :disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.gray};
    border-color: ${({ theme }) => theme.colors.gray};
  }

  :hover:not(:disabled) {
    border-color: ${({ theme }) => theme.input.borderColor};
  }
`;

export const CheckIcon = styled(Check)``;

export const SaveButton = styled.button`
  border: 1px solid transparent;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;

  :disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.gray};
    border-color: ${({ theme }) => theme.colors.gray};
  }

  :hover:not(:disabled) {
    border-color: ${({ theme }) => theme.input.borderColor};
  }
`;

export const CloseIcon = styled(Close)``;

export const DeleteIcon = styled(Delete)``;

import { darken, lighten } from "polished";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { colors } from "../theme/colors";

type Inputs = {
  fund: number;
  date: Date;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));

  const getTodayString = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <FromStyled onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        type="number"
        step={0.01}
        {...register("fund", {
          required: {
            value: true,
            message: "Please enter a fund",
          },
        })}
        placeholder={"Fund"}
      />
      {errors.fund && <span>{errors.fund.message}</span>}
      <input
        defaultValue={getTodayString()}
        type="date"
        {...register("date", {
          required: {
            value: true,
            message: "Please enter a date",
          },
        })}
      />
      {errors.date && <span>{errors.date.message}</span>}

      <SubmitStyled type="submit" />
    </FromStyled>
  );
}

const FromStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 2px;
    border: none;
    text-align: center;
  }
  span {
    color: ${colors.danger};
  }
`;

const SubmitStyled = styled.input`
  transition: all 0.3s ease-in-out;
  background-color: ${colors.primary};
  color: ${colors.onPrimary};
  &:hover {
    background-color: ${darken(0.3, colors.primary)};
    color: ${lighten(0.3, colors.onPrimary)};
  }
`;

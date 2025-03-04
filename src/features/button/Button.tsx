import classes from "./Button.module.css";

type ButtonProps = {
  isLoading: boolean | undefined;
  children: React.ReactNode;
}

function LoadingSpinner() {
  return <span className={classes.spinner}></span>;
}

export default function Button({isLoading, children}: ButtonProps) {
  return (
    <>
      <button type="submit" style={{ height: "45px", width: "100px" }}>
        {isLoading ? <LoadingSpinner /> : children}
      </button>
    </>
  );
}

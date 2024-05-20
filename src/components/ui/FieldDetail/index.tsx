interface FieldDetailProps {
  /**
   * The label of the field. E.g.: "Name", "Email", "Phone".
   */
  label: string;
  /**
   * The value of the field. E.g.: "Pedro Castro"
   */
  value: string;
}

const FieldDetail = ({ label, value }: FieldDetailProps) => {
  return (
    <div className="space-y-1 w-full">
      <h3 className="font-semibold text-slate-700">{label}</h3>
      <p className="text-slate-700">{value}</p>
    </div>
  );
};

export default FieldDetail;

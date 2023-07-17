export const Footer = (year, fullname, studentId) => {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        &copy; {year} {fullName} {studentId}
      </p>
    </div>
  );
};

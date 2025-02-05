import React from "react";

const Education: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 text-gray-800">
      {/* Education Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {/* Degree 1 */}
        <div>
          <p className="font-bold">
            Master of Science <br /> Optics
          </p>
          <p className="text-sm text-gray-600">University of Central Florida</p>
        </div>

        {/* Degree 2 */}
        <div>
          <p className="font-bold">
            Master of Science <br /> Management
          </p>
          <p className="text-sm text-gray-600">University of Florida</p>
        </div>

        {/* Degree 3 */}
        <div>
          <p className="font-bold">
            Bachelor of Science <br /> Engineering Physics
          </p>
          <p className="text-sm text-gray-600">
            Embry-Riddle Aeronautical University
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;

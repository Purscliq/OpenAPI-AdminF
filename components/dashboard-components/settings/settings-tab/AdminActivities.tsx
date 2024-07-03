"use client";
import { useGetAllAdminactiviticesQuery } from "@/services/auth/index.service";

const AdminActivities = () => {
  const { data } = useGetAllAdminactiviticesQuery({});

  const activities = data?.data[0]?.activities || [];

  return (
    <div className="w-full rounded-md py-3 space-y-6">
      <div className="p-2 grid md:grid-cols-[20%_70%] gap-6 lg:gap-12">
        <div className="text-base flex-col flex">
          <h1 className="font-bold text-[#25324B]">
            {data?.data[0]?.first_name} {data?.data[0]?.last_name}
          </h1>
          <p>{data?.data[0]?.role.name}</p>
          <p className="text-[14px] text-[#515B6F]">{data?.data[0]?.email}</p>
        </div>
        <div className="w-full max-w-[753px] border border-gray-200 rounded-[20px] space-y-4 bg-white">
          <div className="border-b border-b-gray-200 p-4 flex justify-between items-center">
            <p className="text-[20px]">Admins Activities</p>
            <button
              type="button"
              className="btn btn-sm text-sm rounded-none normal-case bg-transparent hover:bg-transparent text-[#8F9197] border border-gray-200"
            >
              Activities
            </button>
          </div>
          <div className="w-full overflow-hidden overflow-x-auto">
            <div className="flex flex-col gap-4 p-4">
              {activities.map((activity: any) => (
                <div
                  key={activity.id}
                  className="flex flex-col space-y-2 w-full md:w-[380px] bg-[#FBFBFF] p-1.5 rounded-[10px]"
                >
                  <div className="lg:flex space-y-2 gap-3 lg:space-y-0 justify-between items-center">
                    <span>
                      <h2 className="text-[#25324B]">
                        {" "}
                        {activity.action_model}
                      </h2>
                      <p className="text-[#7C88B1] text-[10px]">
                        Date: {new Date(activity.created_at).toLocaleString()}
                      </p>
                    </span>
                    <p className="px-3 bg-[#F9E1E7] text-[#EB001B] rounded-[40px] text-xs w-max">
                      {activity.action_name}
                    </p>
                  </div>
                  <div className="border-b border-b-gray-300 w-full" />
                  <p className="text-[14px] text-[#25324B]">
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminActivities;

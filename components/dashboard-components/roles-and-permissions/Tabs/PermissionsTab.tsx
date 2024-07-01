"use client";
import { useGetPermissonQuery } from "@/services/auth/index.service";
import AddPermissionsModal from "../AddPermissionsModal";
import { Skeleton } from "antd";

const RolesTab = () => {
  const { data: permission, isLoading: isLoadingR } = useGetPermissonQuery({});

  return (
    <section className="bg-white py-4 px-2 space-y-4">
      <div className="pt-2 pb-4 border-b lg:flex justify-between space-y-2 lg:space-y-0">
        <span>
          <p className="text-[1.1875rem] text-[#25324B]">Manage Permission</p>
          <p className="text-[#515B6F]">
            This is notifications preferences that you can update anytime.
          </p>
        </span>
        <AddPermissionsModal />
      </div>

      <div className="lg:flex gap-8 py-2 space-y-4 lg:space-y-0">
        {isLoadingR ? (
          <Skeleton active />
        ) : permission?.data?.length === 0 ? (
          <p className="text-[#515B6F]">No permissions available.</p>
        ) : (
          permission?.data?.map((role: any) => (
            <div
              key={role.id}
              className="flex-1 flex flex-col justify-between gap-4"
            >
              <div className="rounded-[0.625rem] border border-[#D6DDEB] px-5 py-[1.1875rem] space-y-2 lg:space-y-0 lg:flex justify-between">
                <span className="">
                  <p className="text-[#25324B]">{role.name}</p>
                  <p className="text-[#515B6F]">{role.description}</p>
                </span>
                {/* Uncomment and modify this part when you want to use Popover */}
                {/* <Popover
                  content={content}
                  title="Role Permissions"
                  trigger="click"
                  open={visiblePopover === role.id}
                  onOpenChange={(visible) => {
                    if (!visible) setVisiblePopover(null);
                  }}
                >
                  <Button
                    className="py-2 btn px-4 border text-sm border-[#CCCCF5] hover:border-black hover:text-black bg-white text-[#8F9197]"
                    onClick={() => handleViewPermission(role.id)}
                  >
                    View Permission
                  </Button>
                </Popover> */}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default RolesTab;

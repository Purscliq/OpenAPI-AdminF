"use client";
import { useState } from "react";
import { Popover, Skeleton, Button } from "antd";
import AddRolesModal from "../AddRolesModal";
import {
  useGetRolesQuery,
  useLazyGetRolesPermissonQuery,
} from "@/services/auth/index.service";

const RolesTab = () => {
  const { data: rolesData, isLoading: isLoadingRoles } = useGetRolesQuery({});
  const [
    getPermission,
    { data: rolesPermissionData, isLoading: isLoadingPermissions },
  ] = useLazyGetRolesPermissonQuery({});

  const [visiblePopover, setVisiblePopover] = useState(null);

  const handleViewPermission = (roleId: any) => {
    getPermission(roleId);
    setVisiblePopover(roleId);
  };

  const content = isLoadingPermissions ? (
    <Skeleton active />
  ) : (
    <p>
      {rolesPermissionData?.data?.map((permission: any) => (
        <p key={permission.id}>{permission.name}</p>
      ))}
    </p>
  );

  return (
    <section className="bg-white py-4 px-2 space-y-4">
      <div className="pt-2 pb-4 border-b lg:flex justify-between space-y-2 lg:space-y-0">
        <span>
          <p className="text-[1.1875rem] text-[#25324B]">Manage Roles</p>
          <p className="text-[#515B6F]">
            This is notifications preferences that you can update anytime.
          </p>
        </span>
        <AddRolesModal />
      </div>

      <div className="lg:flex flex-wrap gap-8 py-2 space-y-4 lg:space-y-0">
        {isLoadingRoles ? (
          <Skeleton active />
        ) : (
          rolesData?.data?.map((role: any) => (
            <div
              key={role.id}
              className="flex-1 flex-col justify-between gap-4"
            >
              <div className="rounded-[0.625rem] border border-[#D6DDEB] px-5 py-[1.1875rem] space-y-2 lg:space-y-0 lg:flex justify-between">
                <span className="">
                  <p className="text-[#25324B]">{role.name}</p>
                  <p className="text-[#515B6F]">{role.description}</p>
                </span>
                <Popover
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
                </Popover>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default RolesTab;

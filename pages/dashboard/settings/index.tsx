import { NextPage } from "next";
import React, { useState } from "react";
import AcquiringInstitution from "../../../components/AcquiringInstitution/AcquiringInstitution";
import BankProfile from "../../../components/BankProfile/BankProfile";
import CallHome from "../../../components/CallHome/CallHome";
import CardSettings from "../../../components/CardSettings/CardSettings";
import Communication from "../../../components/Communication/Communication";
import Currency from "../../../components/Currency/Currency";
import Host from "../../../components/Host/Host";
import MerchantBandSettings from "../../../components/MerchantBandSettings/MerchantBandSettings";
import Reciept from "../../../components/Reciept/Reciept";
import RolesSettings from "../../../components/RolesSettings/RolesSettings";
import Transactions from "../../../components/Transactions/Transactions";
import SettingsLayout from "../../../layouts/SettingsLayout/SettingsLayout";

const Settings: NextPage = () => {
  const [current, setCurrent] = useState<string>("merchant-band");
  return (
    <SettingsLayout setCurrent={setCurrent} current={current}>
      {current === "merchant-band" && <MerchantBandSettings />}
      {current === "roles" && <RolesSettings />}
      {current === "bank" && <BankProfile />}
      {current === "acquiring-institution" && <AcquiringInstitution />}
      {current === "communication" && <Communication />}
      {current === "call" && <CallHome />}
      {current === "currency" && <Currency />}
      {current === "transactions" && <Transactions />}
      {current === "receipt" && <Reciept />}
      {current === "host" && <Host />}
      {current === "card" && <CardSettings />}
    </SettingsLayout>
  );
};

export default Settings;

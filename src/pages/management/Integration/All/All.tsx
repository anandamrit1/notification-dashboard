import { useEffect, useState } from "react";
import { BodyLayout } from "../../../../components/BodyLayout";
import { VerticalTabGroup } from "../../../../components/VerticalTabs";

import { ChannelType, ProviderMetadata } from "../../../../types/provider";
import { useAllProviders } from "../../../../hooks/useAllProviders";
import { IntegrationCard } from "../../../../components/IntegrationCard";
import { Modal } from "../../../../components/Modal";
import IntegrationFormDialog from "./ProviderForm";

function AllIntegrations() {
  const [selectedChannel, setSelectedChannel] = useState<ChannelType>("EMAIL");
  const [filteredProviders, setFilteredProviders] = useState<
    ProviderMetadata[]
  >([]);
  const [selectedProvider, setSelectedProvider] = useState<ProviderMetadata>();

  const providers = useAllProviders();

  useEffect(() => {
    setFilteredProviders(
      providers.filter((p) => p.channel === selectedChannel)
    );
  }, [selectedChannel, providers]);

  return (
    <>
      <BodyLayout className="px-10 pb-10">
        <VerticalTabGroup selectedTab={(tab) => setSelectedChannel(tab)} />
        <div className="h-full w-full bg-white flex flex-col p-7">
          {filteredProviders.map((p) => {
            return (
              <IntegrationCard
                title={p.name}
                imageSrc={p.logo}
                channel={p.channel}
                onClick={() => setSelectedProvider(p)}
              />
            );
          })}
        </div>
      </BodyLayout>
      {selectedProvider && (
        <Modal onClose={() => setSelectedProvider(undefined)}>
          {(toggle) => (
            <IntegrationFormDialog
              onCloseHandler={toggle}
              provider={selectedProvider}
            />
          )}
        </Modal>
      )}
    </>
  );
}

export default AllIntegrations;
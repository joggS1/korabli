import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  HexColorField: { input: any; output: any };
  JSONString: { input: any; output: any };
  L10nField: { input: any; output: any };
  MediaUrlField: { input: any; output: any };
};

export type AccountCompletionRewardsInterface = {
  readonly accountCompletionRewards?: Maybe<ReadonlyArray<Maybe<Reward>>>;
};

export type AccountCompletionRewardsInterfaceAccountCompletionRewardsArgs = {
  platform: Scalars['String']['input'];
};

export type Achievements = {
  readonly __typename?: 'Achievements';
  readonly battleRestriction?: Maybe<Scalars['L10nField']['output']>;
  readonly battleTypes?: Maybe<ReadonlyArray<Maybe<BattleType>>>;
  readonly description?: Maybe<Scalars['L10nField']['output']>;
  readonly enabled?: Maybe<Scalars['Boolean']['output']>;
  readonly group?: Maybe<Scalars['Int']['output']>;
  readonly grouping?: Maybe<GroupingAchievements>;
  readonly hidden?: Maybe<Scalars['Boolean']['output']>;
  readonly icons?: Maybe<IconsAchievements>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly isBattle?: Maybe<Scalars['Boolean']['output']>;
  readonly isProgress?: Maybe<Scalars['Boolean']['output']>;
  readonly isRare?: Maybe<Scalars['Boolean']['output']>;
  readonly maxProgress?: Maybe<Scalars['Int']['output']>;
  readonly maxShipLevel?: Maybe<Scalars['Int']['output']>;
  readonly minShipLevel?: Maybe<Scalars['Int']['output']>;
  readonly multiple?: Maybe<Scalars['Boolean']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly onePerBattle?: Maybe<Scalars['Boolean']['output']>;
  readonly receivingRestriction?: Maybe<Scalars['L10nField']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
  readonly type?: Maybe<Scalars['String']['output']>;
  readonly typeTitle?: Maybe<Scalars['L10nField']['output']>;
};

export type AchievementsGroup = {
  readonly __typename?: 'AchievementsGroup';
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly sortOrder?: Maybe<Scalars['Int']['output']>;
  readonly subgroups?: Maybe<ReadonlyArray<Maybe<AchievementsSubGroup>>>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
};

export type AchievementsGroupsInterface = {
  readonly achievementsGroups?: Maybe<ReadonlyArray<Maybe<AchievementsGroup>>>;
};

export type AchievementsGroupsInterfaceAchievementsGroupsArgs = {
  achievementsGroupId?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type AchievementsInterface = {
  readonly achievements?: Maybe<ReadonlyArray<Maybe<Achievements>>>;
};

export type AchievementsInterfaceAchievementsArgs = {
  achievementId?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type AchievementsSubGroup = {
  readonly __typename?: 'AchievementsSubGroup';
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly sortOrder?: Maybe<Scalars['Int']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
};

export type ArenaBattle = {
  readonly __typename?: 'ArenaBattle';
  readonly arenaId?: Maybe<Scalars['String']['output']>;
  readonly battleTypeId?: Maybe<Scalars['String']['output']>;
  readonly gameModeId?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly scenarioName?: Maybe<Scalars['String']['output']>;
};

export type ArenaBattlesInterface = {
  readonly arenaBattles?: Maybe<ReadonlyArray<Maybe<ArenaBattle>>>;
};

export type BattleMode = {
  readonly __typename?: 'BattleMode';
  readonly description?: Maybe<Scalars['L10nField']['output']>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
};

export type BattleModesInterface = {
  readonly battleModes?: Maybe<ReadonlyArray<Maybe<BattleMode>>>;
};

export type BattleModesInterfaceBattleModesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type BattleScenario = {
  readonly __typename?: 'BattleScenario';
  readonly scenarioName?: Maybe<Scalars['ID']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
};

export type BattleScenariosInterface = {
  readonly battleScenarios?: Maybe<ReadonlyArray<Maybe<BattleScenario>>>;
};

export type BattleScenariosInterfaceBattleScenariosArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type BattleType = {
  readonly __typename?: 'BattleType';
  readonly description?: Maybe<Scalars['L10nField']['output']>;
  readonly dossierName?: Maybe<Scalars['String']['output']>;
  readonly icons?: Maybe<IconBattleType>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
};

export type BattleTypesInterface = {
  readonly battleTypes?: Maybe<ReadonlyArray<Maybe<BattleType>>>;
};

export type BattleTypesInterfaceBattleTypesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type Campaign = {
  readonly __typename?: 'Campaign';
  readonly description?: Maybe<Scalars['L10nField']['output']>;
  readonly icons?: Maybe<CampaignIcons>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly isTemporary?: Maybe<Scalars['Boolean']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly rewards?: Maybe<Scalars['JSONString']['output']>;
  readonly tasks?: Maybe<Scalars['Int']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
};

export type CampaignIcons = {
  readonly __typename?: 'CampaignIcons';
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type CampaignInterface = {
  readonly campaigns?: Maybe<ReadonlyArray<Maybe<Campaign>>>;
};

export type ClanTag = {
  readonly __typename?: 'ClanTag';
  readonly fontColor?: Maybe<Scalars['String']['output']>;
  readonly x?: Maybe<Scalars['Int']['output']>;
  readonly y?: Maybe<Scalars['Int']['output']>;
};

export type CollectibleAlbum = {
  readonly __typename?: 'CollectibleAlbum';
  readonly cardCost?: Maybe<Scalars['Int']['output']>;
  readonly description?: Maybe<Scalars['L10nField']['output']>;
  readonly icons?: Maybe<CollectibleAlbumIcons>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
  readonly titleQuotes?: Maybe<Scalars['L10nField']['output']>;
};

export type CollectibleAlbumIcons = {
  readonly __typename?: 'CollectibleAlbumIcons';
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly large?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly small?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type CollectibleAlbumsInterface = {
  readonly collectibleAlbum?: Maybe<ReadonlyArray<Maybe<CollectibleAlbum>>>;
};

export type CollectibleAlbumsInterfaceCollectibleAlbumArgs = {
  albumId?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type CollectibleCard = {
  readonly __typename?: 'CollectibleCard';
  readonly album?: Maybe<CollectibleAlbum>;
  readonly description?: Maybe<Scalars['L10nField']['output']>;
  readonly enabled?: Maybe<Scalars['Boolean']['output']>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
};

export type CollectibleCardsInterface = {
  readonly collectibleCards?: Maybe<ReadonlyArray<Maybe<CollectibleCard>>>;
};

export type ComponentIcons = {
  readonly __typename?: 'ComponentIcons';
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly large?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly localLarge?: Maybe<Scalars['String']['output']>;
  readonly localMedium?: Maybe<Scalars['String']['output']>;
  readonly localSmall?: Maybe<Scalars['String']['output']>;
  readonly medium?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly small?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type Crew = {
  readonly __typename?: 'Crew';
  readonly baseTrainingLevel?: Maybe<Scalars['Int']['output']>;
  readonly category?: Maybe<Scalars['String']['output']>;
  readonly hasRank?: Maybe<Scalars['Boolean']['output']>;
  readonly hasSampleVo?: Maybe<Scalars['Boolean']['output']>;
  readonly icons?: Maybe<ReadonlyArray<Maybe<CrewIcon>>>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly isPerson?: Maybe<Scalars['Boolean']['output']>;
  readonly isRetrainable?: Maybe<Scalars['Boolean']['output']>;
  readonly isUnique?: Maybe<Scalars['Boolean']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly nation?: Maybe<Nation>;
  readonly nationsToSeat?: Maybe<ReadonlyArray<Maybe<Nation>>>;
  readonly peculiarity?: Maybe<Peculiarity>;
  readonly personalizationTypes?: Maybe<ReadonlyArray<Maybe<CrewPersonalizationType>>>;
  readonly skills?: Maybe<ReadonlyArray<Maybe<CrewSkill>>>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly talents?: Maybe<ReadonlyArray<Maybe<CrewTalent>>>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
  readonly type?: Maybe<Scalars['String']['output']>;
  readonly unlocks?: Maybe<ReadonlyArray<Maybe<Unlock>>>;
};

export type CrewIcon = {
  readonly __typename?: 'CrewIcon';
  readonly default?: Maybe<Scalars['String']['output']>;
  readonly maxLevel?: Maybe<Scalars['Int']['output']>;
  readonly minLevel?: Maybe<Scalars['Int']['output']>;
};

export type CrewPersonalizationType = {
  readonly __typename?: 'CrewPersonalizationType';
  readonly description?: Maybe<Scalars['L10nField']['output']>;
  readonly icons?: Maybe<PersonalizationTypesIcons>;
  readonly id?: Maybe<Scalars['Int']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
};

export type CrewSkill = {
  readonly __typename?: 'CrewSkill';
  readonly customization?: Maybe<ReadonlyArray<Maybe<CustomizationField>>>;
  readonly description?: Maybe<Scalars['L10nField']['output']>;
  readonly icons?: Maybe<SkillIcons>;
  readonly perks?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly tier?: Maybe<Scalars['Int']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
  readonly typeId?: Maybe<Scalars['Int']['output']>;
};

export type CrewTalent = {
  readonly __typename?: 'CrewTalent';
  readonly description?: Maybe<Scalars['L10nField']['output']>;
  readonly icons?: Maybe<TalentsIcons>;
  readonly maxTriggerNum?: Maybe<Scalars['Int']['output']>;
  readonly perks?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
};

export type CrewsInterfaces = {
  readonly crews?: Maybe<ReadonlyArray<Maybe<Crew>>>;
};

export type CrewsInterfacesCrewsArgs = {
  crewId?: InputMaybe<Scalars['String']['input']>;
  crewIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  isPerson?: InputMaybe<Scalars['Boolean']['input']>;
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type Currency = {
  readonly __typename?: 'Currency';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly icons?: Maybe<CurrencyIcons>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
  readonly tooltipDescription?: Maybe<Scalars['L10nField']['output']>;
  readonly tooltipGetDescription?: Maybe<Scalars['L10nField']['output']>;
  readonly tooltipStatusInfo?: Maybe<Scalars['L10nField']['output']>;
};

export type CurrencyIcons = {
  readonly __typename?: 'CurrencyIcons';
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly extra?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly large?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly localDefault?: Maybe<Scalars['String']['output']>;
  readonly localExtra?: Maybe<Scalars['String']['output']>;
  readonly localSmall?: Maybe<Scalars['String']['output']>;
  readonly small?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type CurrencyInterface = {
  readonly currencies?: Maybe<ReadonlyArray<Maybe<Currency>>>;
};

export type CurrencyInterfaceCurrenciesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type CustomizationField = {
  readonly __typename?: 'CustomizationField';
  readonly description?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly type?: Maybe<Scalars['String']['output']>;
};

export type DogTagComponent = {
  readonly __typename?: 'DogTagComponent';
  readonly clanTag?: Maybe<ClanTag>;
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly condition?: Maybe<Scalars['L10nField']['output']>;
  readonly icons?: Maybe<ComponentIcons>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly isColorizable?: Maybe<Scalars['Boolean']['output']>;
  readonly isPatch?: Maybe<Scalars['Boolean']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly quest?: Maybe<Scalars['L10nField']['output']>;
  readonly showClanTag?: Maybe<Scalars['Boolean']['output']>;
  readonly symbolOffsetY?: Maybe<Scalars['String']['output']>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly textureData?: Maybe<ReadonlyArray<Maybe<TextureDataItem>>>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
  readonly type?: Maybe<Scalars['String']['output']>;
};

export type DogTagsInterface = {
  readonly dogTagComponents?: Maybe<ReadonlyArray<Maybe<DogTagComponent>>>;
};

export type DogTagsInterfaceDogTagComponentsArgs = {
  componentId?: InputMaybe<Scalars['String']['input']>;
  componentIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type Doll = {
  readonly __typename?: 'Doll';
  readonly clanTag?: Maybe<DollClanTag>;
  readonly condition?: Maybe<Scalars['L10nField']['output']>;
  readonly icons?: Maybe<DollIcons>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly quest?: Maybe<Scalars['L10nField']['output']>;
  readonly showClanTag?: Maybe<Scalars['Boolean']['output']>;
  readonly symbolOffsetY?: Maybe<Scalars['String']['output']>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
  readonly type?: Maybe<Scalars['String']['output']>;
};

export type DollClanTag = {
  readonly __typename?: 'DollClanTag';
  readonly fontColor?: Maybe<Scalars['String']['output']>;
  readonly x?: Maybe<Scalars['Int']['output']>;
  readonly y?: Maybe<Scalars['Int']['output']>;
};

export type DollIcons = {
  readonly __typename?: 'DollIcons';
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly large?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly localLarge?: Maybe<Scalars['String']['output']>;
  readonly localSmall?: Maybe<Scalars['String']['output']>;
  readonly medium?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly small?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type DollsInterface = {
  readonly dolls?: Maybe<ReadonlyArray<Maybe<Doll>>>;
};

export type DollsInterfaceDollsArgs = {
  dollId?: InputMaybe<Scalars['String']['input']>;
  dollIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type Ensign = {
  readonly __typename?: 'Ensign';
  readonly categoryType?: Maybe<Scalars['String']['output']>;
  readonly description?: Maybe<Scalars['L10nField']['output']>;
  readonly icons?: Maybe<EnsignIcons>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly prices?: Maybe<Prices>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
  readonly titleShort?: Maybe<Scalars['L10nField']['output']>;
  readonly ttc?: Maybe<ReadonlyArray<Maybe<Ttc>>>;
};

export type EnsignIcons = {
  readonly __typename?: 'EnsignIcons';
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly large?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly localDefault?: Maybe<Scalars['String']['output']>;
  readonly medium?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly small?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type EnsignsInterfaces = {
  readonly ensigns?: Maybe<ReadonlyArray<Maybe<Ensign>>>;
};

export type EnsignsInterfacesEnsignsArgs = {
  ensignsId?: InputMaybe<Scalars['String']['input']>;
  ensignsIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type FeatureCategory = {
  readonly __typename?: 'FeatureCategory';
  readonly icons?: Maybe<IconsFeatureCategory>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
};

export type FeaturesInterface = {
  readonly features?: Maybe<ReadonlyArray<Maybe<VehiclesFeatures>>>;
};

export type FeaturesInterfaceFeaturesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GameVersionInterface = {
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type GlossaryQuery = AccountCompletionRewardsInterface &
  AchievementsGroupsInterface &
  AchievementsInterface &
  ArenaBattlesInterface &
  BattleModesInterface &
  BattleScenariosInterface &
  BattleTypesInterface &
  CampaignInterface &
  CollectibleAlbumsInterface &
  CollectibleCardsInterface &
  CrewsInterfaces &
  CurrencyInterface &
  DogTagsInterface &
  DollsInterface &
  EnsignsInterfaces &
  FeaturesInterface &
  GameVersionInterface &
  ItemInterface &
  ItemTypesInterface &
  LootBoxInterface &
  NationsInterface &
  PeculiarityInterface &
  PermoflagesInterface &
  UnlockInterface &
  VehicleTypesInterface &
  VehiclesInterface & {
    readonly __typename?: 'GlossaryQuery';
    readonly accountCompletionRewards?: Maybe<ReadonlyArray<Maybe<Reward>>>;
    readonly achievements?: Maybe<ReadonlyArray<Maybe<Achievements>>>;
    readonly achievementsGroups?: Maybe<ReadonlyArray<Maybe<AchievementsGroup>>>;
    readonly arenaBattles?: Maybe<ReadonlyArray<Maybe<ArenaBattle>>>;
    readonly battleModes?: Maybe<ReadonlyArray<Maybe<BattleMode>>>;
    readonly battleScenarios?: Maybe<ReadonlyArray<Maybe<BattleScenario>>>;
    readonly battleTypes?: Maybe<ReadonlyArray<Maybe<BattleType>>>;
    readonly campaigns?: Maybe<ReadonlyArray<Maybe<Campaign>>>;
    readonly collectibleAlbum?: Maybe<ReadonlyArray<Maybe<CollectibleAlbum>>>;
    readonly collectibleCards?: Maybe<ReadonlyArray<Maybe<CollectibleCard>>>;
    readonly crews?: Maybe<ReadonlyArray<Maybe<Crew>>>;
    readonly currencies?: Maybe<ReadonlyArray<Maybe<Currency>>>;
    readonly dogTagComponents?: Maybe<ReadonlyArray<Maybe<DogTagComponent>>>;
    readonly dolls?: Maybe<ReadonlyArray<Maybe<Doll>>>;
    readonly ensigns?: Maybe<ReadonlyArray<Maybe<Ensign>>>;
    readonly features?: Maybe<ReadonlyArray<Maybe<VehiclesFeatures>>>;
    readonly itemTypes?: Maybe<ReadonlyArray<Maybe<ItemType>>>;
    readonly items?: Maybe<ReadonlyArray<Maybe<Item>>>;
    readonly lootbox?: Maybe<ReadonlyArray<Maybe<LootBox>>>;
    readonly nations?: Maybe<ReadonlyArray<Maybe<Nation>>>;
    readonly peculiarities?: Maybe<ReadonlyArray<Maybe<Peculiarity>>>;
    readonly permoflages?: Maybe<ReadonlyArray<Maybe<Permoflages>>>;
    readonly unlocks?: Maybe<ReadonlyArray<Maybe<Unlock>>>;
    readonly vehicleTypes?: Maybe<ReadonlyArray<Maybe<VehicleType>>>;
    readonly vehicles?: Maybe<ReadonlyArray<Maybe<Vehicle>>>;
    readonly version?: Maybe<Scalars['String']['output']>;
  };

export type GlossaryQueryAccountCompletionRewardsArgs = {
  platform: Scalars['String']['input'];
};

export type GlossaryQueryAchievementsArgs = {
  achievementId?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GlossaryQueryAchievementsGroupsArgs = {
  achievementsGroupId?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GlossaryQueryBattleModesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GlossaryQueryBattleScenariosArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GlossaryQueryBattleTypesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GlossaryQueryCollectibleAlbumArgs = {
  albumId?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GlossaryQueryCrewsArgs = {
  crewId?: InputMaybe<Scalars['String']['input']>;
  crewIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  isPerson?: InputMaybe<Scalars['Boolean']['input']>;
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GlossaryQueryCurrenciesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GlossaryQueryDogTagComponentsArgs = {
  componentId?: InputMaybe<Scalars['String']['input']>;
  componentIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GlossaryQueryDollsArgs = {
  dollId?: InputMaybe<Scalars['String']['input']>;
  dollIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GlossaryQueryEnsignsArgs = {
  ensignsId?: InputMaybe<Scalars['String']['input']>;
  ensignsIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GlossaryQueryFeaturesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GlossaryQueryItemTypesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GlossaryQueryItemsArgs = {
  itemGroup?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['String']['input']>;
  itemIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  itemType?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GlossaryQueryLootboxArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
  lootboxId?: InputMaybe<Scalars['String']['input']>;
  lootboxIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type GlossaryQueryNationsArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GlossaryQueryPeculiaritiesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GlossaryQueryPermoflagesArgs = {
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  permoflageId?: InputMaybe<Scalars['String']['input']>;
  permoflageIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type GlossaryQueryUnlocksArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
  unlockId?: InputMaybe<Scalars['Int']['input']>;
};

export type GlossaryQueryVehicleTypesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GlossaryQueryVehiclesArgs = {
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  vehicleId?: InputMaybe<Scalars['String']['input']>;
  vehicleIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type GroupingAchievements = {
  readonly __typename?: 'GroupingAchievements';
  readonly group?: Maybe<Scalars['String']['output']>;
  readonly sortOrder?: Maybe<Scalars['Int']['output']>;
  readonly sortOrderInGroup?: Maybe<Scalars['Int']['output']>;
  readonly subgroup?: Maybe<Scalars['String']['output']>;
};

export type IconBattleType = {
  readonly __typename?: 'IconBattleType';
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type IconsAchievements = {
  readonly __typename?: 'IconsAchievements';
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly inactive?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly normal?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type IconsFeatureCategory = {
  readonly __typename?: 'IconsFeatureCategory';
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly localDefault?: Maybe<Scalars['String']['output']>;
};

export type IconsVehicle = {
  readonly __typename?: 'IconsVehicle';
  readonly contour?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly contourAlive?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly contourDead?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly large?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly localSmall?: Maybe<Scalars['String']['output']>;
  readonly medium?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly small?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type IconsVehicleClass = {
  readonly __typename?: 'IconsVehicleClass';
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly elite?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly normal?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly premium?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly special?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type Item = {
  readonly __typename?: 'Item';
  readonly description?: Maybe<Scalars['L10nField']['output']>;
  readonly group?: Maybe<ItemType>;
  readonly groupName?: Maybe<Scalars['String']['output']>;
  readonly icons?: Maybe<ItemIcons>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly prices?: Maybe<Prices>;
  readonly restrictions?: Maybe<ItemRestrictions>;
  readonly slot?: Maybe<Scalars['Int']['output']>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
  readonly titleShort?: Maybe<Scalars['L10nField']['output']>;
  readonly ttc?: Maybe<ReadonlyArray<Maybe<Ttc>>>;
  readonly type?: Maybe<ItemType>;
  readonly typeName?: Maybe<Scalars['String']['output']>;
};

export type ItemIcons = {
  readonly __typename?: 'ItemIcons';
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly extra?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type ItemInterface = {
  readonly items?: Maybe<ReadonlyArray<Maybe<Item>>>;
};

export type ItemInterfaceItemsArgs = {
  itemGroup?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['String']['input']>;
  itemIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  itemType?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type ItemRestrictions = {
  readonly __typename?: 'ItemRestrictions';
  readonly levels?: Maybe<ReadonlyArray<Maybe<Scalars['Int']['output']>>>;
  readonly subtype?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
};

export type ItemType = {
  readonly __typename?: 'ItemType';
  readonly icons?: Maybe<ItemTypeIcons>;
  readonly name?: Maybe<Scalars['ID']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
};

export type ItemTypeIcons = {
  readonly __typename?: 'ItemTypeIcons';
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type ItemTypesInterface = {
  readonly itemTypes?: Maybe<ReadonlyArray<Maybe<ItemType>>>;
};

export type ItemTypesInterfaceItemTypesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type LootBox = {
  readonly __typename?: 'LootBox';
  readonly icons?: Maybe<LootboxIcons>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly isPremium?: Maybe<Scalars['Boolean']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly rewards?: Maybe<ReadonlyArray<Maybe<Rewards>>>;
  readonly shortTitle?: Maybe<Scalars['L10nField']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
};

export type LootBoxInterface = {
  readonly lootbox?: Maybe<ReadonlyArray<Maybe<LootBox>>>;
};

export type LootBoxInterfaceLootboxArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
  lootboxId?: InputMaybe<Scalars['String']['input']>;
  lootboxIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type LootboxIcons = {
  readonly __typename?: 'LootboxIcons';
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly large?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly small?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type Nation = {
  readonly __typename?: 'Nation';
  readonly color?: Maybe<Scalars['HexColorField']['output']>;
  readonly icons?: Maybe<NationIcons>;
  readonly name?: Maybe<Scalars['ID']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
};

export type NationIcons = {
  readonly __typename?: 'NationIcons';
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly large?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly medium?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly small?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly tiny?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type NationsInterface = {
  readonly nations?: Maybe<ReadonlyArray<Maybe<Nation>>>;
};

export type NationsInterfaceNationsArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type Peculiarity = {
  readonly __typename?: 'Peculiarity';
  readonly category?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['ID']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
};

export type PeculiarityInterface = {
  readonly peculiarities?: Maybe<ReadonlyArray<Maybe<Peculiarity>>>;
};

export type PeculiarityInterfacePeculiaritiesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type PermoflageRestrictions = {
  readonly __typename?: 'PermoflageRestrictions';
  readonly forbiddenShips?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly levels?: Maybe<ReadonlyArray<Maybe<Scalars['Int']['output']>>>;
  readonly nations?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly specificShips?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly types?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
};

export type PermoflageVehicles = {
  readonly __typename?: 'PermoflageVehicles';
  readonly isNative?: Maybe<Scalars['Boolean']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
  readonly vehicle?: Maybe<Vehicle>;
};

/** Glossary: https://glossary.lstprod.net/glossary/v1/wows/current/wows_permoflages?lang=en */
export type Permoflages = {
  readonly __typename?: 'Permoflages';
  readonly description?: Maybe<Scalars['L10nField']['output']>;
  readonly icons?: Maybe<PermoglagesIcons>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly prices?: Maybe<Prices>;
  readonly relatedVehicles?: Maybe<ReadonlyArray<Maybe<Vehicle>>>;
  readonly restrictions?: Maybe<PermoflageRestrictions>;
  readonly subType?: Maybe<Scalars['String']['output']>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
  readonly titleShort?: Maybe<Scalars['L10nField']['output']>;
  readonly type?: Maybe<ItemType>;
  readonly typeName?: Maybe<Scalars['String']['output']>;
  readonly vehicles?: Maybe<ReadonlyArray<Maybe<PermoflageVehicles>>>;
};

export type PermoflagesInterface = {
  readonly permoflages?: Maybe<ReadonlyArray<Maybe<Permoflages>>>;
};

export type PermoflagesInterfacePermoflagesArgs = {
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  permoflageId?: InputMaybe<Scalars['String']['input']>;
  permoflageIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type PermoglagesIcons = {
  readonly __typename?: 'PermoglagesIcons';
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly large?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly localDefault?: Maybe<Scalars['String']['output']>;
  readonly medium?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly small?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type PersonalizationTypesIcons = {
  readonly __typename?: 'PersonalizationTypesIcons';
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type Prices = {
  readonly __typename?: 'Prices';
  readonly credit?: Maybe<Scalars['Int']['output']>;
  readonly gold?: Maybe<Scalars['Int']['output']>;
  readonly xp?: Maybe<Scalars['Int']['output']>;
};

export type Reward = {
  readonly __typename?: 'Reward';
  readonly amount?: Maybe<Scalars['Int']['output']>;
  readonly crewLevel?: Maybe<Scalars['Int']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly onlySilver?: Maybe<Scalars['Boolean']['output']>;
  readonly shipId?: Maybe<Scalars['ID']['output']>;
  readonly type?: Maybe<Scalars['String']['output']>;
};

export type Rewards = {
  readonly __typename?: 'Rewards';
  readonly category?: Maybe<Scalars['String']['output']>;
  readonly reward?: Maybe<Reward>;
  readonly slotId?: Maybe<Scalars['Int']['output']>;
  readonly type?: Maybe<Scalars['String']['output']>;
};

export type SkillIcons = {
  readonly __typename?: 'SkillIcons';
  readonly active?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly inactive?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly penalty?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type Ttc = {
  readonly __typename?: 'TTC';
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['String']['output']>;
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type TalentsIcons = {
  readonly __typename?: 'TalentsIcons';
  readonly default?: Maybe<Scalars['MediaUrlField']['output']>;
};

export type TextureDataItem = {
  readonly __typename?: 'TextureDataItem';
  readonly background?: Maybe<ComponentIcons>;
  readonly border?: Maybe<ComponentIcons>;
  readonly id?: Maybe<Scalars['ID']['output']>;
};

export type Unlock = {
  readonly __typename?: 'Unlock';
  readonly description?: Maybe<Scalars['L10nField']['output']>;
  readonly icon?: Maybe<Scalars['MediaUrlField']['output']>;
  readonly id?: Maybe<Scalars['Int']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
  readonly type?: Maybe<Scalars['Int']['output']>;
};

export type UnlockInterface = {
  readonly unlocks?: Maybe<ReadonlyArray<Maybe<Unlock>>>;
};

export type UnlockInterfaceUnlocksArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
  unlockId?: InputMaybe<Scalars['Int']['input']>;
};

export type Vehicle = {
  readonly __typename?: 'Vehicle';
  readonly consumables?: Maybe<ReadonlyArray<Maybe<VehicleConsumable>>>;
  readonly description?: Maybe<Scalars['L10nField']['output']>;
  readonly hasGoldPrice?: Maybe<Scalars['Boolean']['output']>;
  readonly icons?: Maybe<IconsVehicle>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly isClan?: Maybe<Scalars['Boolean']['output']>;
  readonly isPremium?: Maybe<Scalars['Boolean']['output']>;
  readonly isSpecial?: Maybe<Scalars['Boolean']['output']>;
  readonly level?: Maybe<Scalars['Int']['output']>;
  readonly modernizations?: Maybe<ReadonlyArray<Maybe<VehicleModernization>>>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly nation?: Maybe<Nation>;
  readonly nationName?: Maybe<Scalars['String']['output']>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
  readonly titleShort?: Maybe<Scalars['L10nField']['output']>;
  readonly ttc?: Maybe<ReadonlyArray<Maybe<VehicleTtc>>>;
  readonly type?: Maybe<VehicleType>;
  readonly typeName?: Maybe<Scalars['String']['output']>;
};

export type VehicleConsumable = {
  readonly __typename?: 'VehicleConsumable';
  readonly consumableSlot?: Maybe<Scalars['String']['output']>;
  readonly description?: Maybe<Scalars['L10nField']['output']>;
  readonly group?: Maybe<ItemType>;
  readonly groupName?: Maybe<Scalars['String']['output']>;
  readonly icons?: Maybe<ItemIcons>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly prices?: Maybe<Prices>;
  readonly restrictions?: Maybe<ItemRestrictions>;
  readonly slot?: Maybe<Scalars['Int']['output']>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
  readonly titleShort?: Maybe<Scalars['L10nField']['output']>;
  readonly ttc?: Maybe<ReadonlyArray<Maybe<Ttc>>>;
  readonly type?: Maybe<ItemType>;
  readonly typeName?: Maybe<Scalars['String']['output']>;
};

export type VehicleFeaturesCategories = {
  readonly __typename?: 'VehicleFeaturesCategories';
  readonly category?: Maybe<FeatureCategory>;
  readonly features?: Maybe<ReadonlyArray<Maybe<VehicleMainFeatures>>>;
};

export type VehicleMainFeatures = {
  readonly __typename?: 'VehicleMainFeatures';
  readonly category?: Maybe<Scalars['String']['output']>;
  readonly description?: Maybe<Scalars['L10nField']['output']>;
  readonly key?: Maybe<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
};

export type VehicleModernization = {
  readonly __typename?: 'VehicleModernization';
  readonly description?: Maybe<Scalars['L10nField']['output']>;
  readonly group?: Maybe<ItemType>;
  readonly groupName?: Maybe<Scalars['String']['output']>;
  readonly icons?: Maybe<ItemIcons>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly modernizationSlot?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly prices?: Maybe<Prices>;
  readonly restrictions?: Maybe<ItemRestrictions>;
  readonly slot?: Maybe<Scalars['Int']['output']>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
  readonly titleShort?: Maybe<Scalars['L10nField']['output']>;
  readonly ttc?: Maybe<ReadonlyArray<Maybe<Ttc>>>;
  readonly type?: Maybe<ItemType>;
  readonly typeName?: Maybe<Scalars['String']['output']>;
};

export type VehicleTtc = {
  readonly __typename?: 'VehicleTTC';
  readonly description?: Maybe<Scalars['L10nField']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
  readonly unit?: Maybe<Scalars['L10nField']['output']>;
  readonly value?: Maybe<Scalars['Float']['output']>;
};

export type VehicleType = {
  readonly __typename?: 'VehicleType';
  readonly icons?: Maybe<IconsVehicleClass>;
  readonly name?: Maybe<Scalars['ID']['output']>;
  readonly title?: Maybe<Scalars['L10nField']['output']>;
  readonly titleShort?: Maybe<Scalars['L10nField']['output']>;
};

export type VehicleTypesInterface = {
  readonly vehicleTypes?: Maybe<ReadonlyArray<Maybe<VehicleType>>>;
};

export type VehicleTypesInterfaceVehicleTypesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type VehiclesFeatures = {
  readonly __typename?: 'VehiclesFeatures';
  readonly categories?: Maybe<ReadonlyArray<Maybe<VehicleFeaturesCategories>>>;
  readonly id?: Maybe<Scalars['ID']['output']>;
  readonly mainFeatures?: Maybe<ReadonlyArray<Maybe<VehicleMainFeatures>>>;
};

export type VehiclesInterface = {
  readonly vehicles?: Maybe<ReadonlyArray<Maybe<Vehicle>>>;
};

export type VehiclesInterfaceVehiclesArgs = {
  isCatalogue?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  vehicleId?: InputMaybe<Scalars['String']['input']>;
  vehicleIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type VehiclesListQueryVariables = Exact<{ [key: string]: never }>;

export type VehiclesListQuery = {
  readonly __typename?: 'GlossaryQuery';
  readonly vehicles?: ReadonlyArray<{
    readonly __typename?: 'Vehicle';
    readonly id?: string;
    readonly title?: any;
    readonly name?: string;
    readonly titleShort?: any;
    readonly level?: number;
    readonly isPremium?: boolean;
    readonly isClan?: boolean;
    readonly isSpecial?: boolean;
    readonly hasGoldPrice?: boolean;
    readonly typeName?: string;
    readonly nationName?: string;
    readonly icons?: { readonly __typename?: 'IconsVehicle'; readonly small?: any };
    readonly type?: { readonly __typename?: 'VehicleType'; readonly title?: any };
    readonly nation?: {
      readonly __typename?: 'Nation';
      readonly title?: any;
      readonly icons?: { readonly __typename?: 'NationIcons'; readonly tiny?: any };
    };
  }>;
};

export type VehicleListFiltersQueryVariables = Exact<{ [key: string]: never }>;

export type VehicleListFiltersQuery = {
  readonly __typename?: 'GlossaryQuery';
  readonly vehicleTypes?: ReadonlyArray<{
    readonly __typename?: 'VehicleType';
    readonly name?: string;
    readonly title?: any;
  }>;
  readonly nations?: ReadonlyArray<{
    readonly __typename?: 'Nation';
    readonly name?: string;
    readonly title?: any;
  }>;
};

export type VehicleQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type VehicleQuery = {
  readonly __typename?: 'GlossaryQuery';
  readonly vehicles?: ReadonlyArray<{
    readonly __typename?: 'Vehicle';
    readonly title?: any;
    readonly level?: number;
    readonly description?: any;
    readonly hasGoldPrice?: boolean;
    readonly isPremium?: boolean;
    readonly isClan?: boolean;
    readonly isSpecial?: boolean;
    readonly icons?: { readonly __typename?: 'IconsVehicle'; readonly large?: any };
    readonly consumables?: ReadonlyArray<{
      readonly __typename?: 'VehicleConsumable';
      readonly name?: string;
      readonly title?: any;
      readonly description?: any;
    }>;
    readonly modernizations?: ReadonlyArray<{
      readonly __typename?: 'VehicleModernization';
      readonly name?: string;
      readonly title?: any;
      readonly description?: any;
    }>;
    readonly ttc?: ReadonlyArray<{
      readonly __typename?: 'VehicleTTC';
      readonly name?: string;
      readonly title?: any;
      readonly description?: any;
      readonly unit?: any;
      readonly value?: number;
    }>;
    readonly type?: { readonly __typename?: 'VehicleType'; readonly title?: any };
    readonly nation?: {
      readonly __typename?: 'Nation';
      readonly title?: any;
      readonly icons?: { readonly __typename?: 'NationIcons'; readonly tiny?: any };
    };
  }>;
};

export const VehiclesListDocument = gql`
  query VehiclesList {
    vehicles(lang: "ru") {
      id
      title
      name
      titleShort
      level
      isPremium
      isClan
      isSpecial
      icons {
        small
      }
      hasGoldPrice
      typeName
      type {
        title
      }
      nationName
      nation {
        title
        icons {
          tiny
        }
      }
    }
  }
`;

/**
 * __useVehiclesListQuery__
 *
 * To run a query within a React component, call `useVehiclesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useVehiclesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVehiclesListQuery({
 *   variables: {
 *   },
 * });
 */
export function useVehiclesListQuery(
  baseOptions?: Apollo.QueryHookOptions<VehiclesListQuery, VehiclesListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<VehiclesListQuery, VehiclesListQueryVariables>(
    VehiclesListDocument,
    options
  );
}
export function useVehiclesListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<VehiclesListQuery, VehiclesListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<VehiclesListQuery, VehiclesListQueryVariables>(
    VehiclesListDocument,
    options
  );
}
export function useVehiclesListSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<VehiclesListQuery, VehiclesListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<VehiclesListQuery, VehiclesListQueryVariables>(
    VehiclesListDocument,
    options
  );
}
export type VehiclesListQueryHookResult = ReturnType<typeof useVehiclesListQuery>;
export type VehiclesListLazyQueryHookResult = ReturnType<typeof useVehiclesListLazyQuery>;
export type VehiclesListSuspenseQueryHookResult = ReturnType<typeof useVehiclesListSuspenseQuery>;
export type VehiclesListQueryResult = Apollo.QueryResult<
  VehiclesListQuery,
  VehiclesListQueryVariables
>;
export const VehicleListFiltersDocument = gql`
  query VehicleListFilters {
    vehicleTypes(lang: "ru") {
      name
      title
    }
    nations(lang: "ru") {
      name
      title
    }
  }
`;

/**
 * __useVehicleListFiltersQuery__
 *
 * To run a query within a React component, call `useVehicleListFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useVehicleListFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVehicleListFiltersQuery({
 *   variables: {
 *   },
 * });
 */
export function useVehicleListFiltersQuery(
  baseOptions?: Apollo.QueryHookOptions<VehicleListFiltersQuery, VehicleListFiltersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<VehicleListFiltersQuery, VehicleListFiltersQueryVariables>(
    VehicleListFiltersDocument,
    options
  );
}
export function useVehicleListFiltersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    VehicleListFiltersQuery,
    VehicleListFiltersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<VehicleListFiltersQuery, VehicleListFiltersQueryVariables>(
    VehicleListFiltersDocument,
    options
  );
}
export function useVehicleListFiltersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    VehicleListFiltersQuery,
    VehicleListFiltersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<VehicleListFiltersQuery, VehicleListFiltersQueryVariables>(
    VehicleListFiltersDocument,
    options
  );
}
export type VehicleListFiltersQueryHookResult = ReturnType<typeof useVehicleListFiltersQuery>;
export type VehicleListFiltersLazyQueryHookResult = ReturnType<
  typeof useVehicleListFiltersLazyQuery
>;
export type VehicleListFiltersSuspenseQueryHookResult = ReturnType<
  typeof useVehicleListFiltersSuspenseQuery
>;
export type VehicleListFiltersQueryResult = Apollo.QueryResult<
  VehicleListFiltersQuery,
  VehicleListFiltersQueryVariables
>;
export const VehicleDocument = gql`
  query Vehicle($id: String!) {
    vehicles(vehicleId: $id, lang: "ru") {
      title
      level
      description
      icons {
        large
      }
      consumables {
        name
        title
        description
      }
      modernizations {
        name
        title
        description
      }
      hasGoldPrice
      isPremium
      isClan
      isSpecial
      ttc {
        name
        title
        description
        unit
        name
        value
      }
      type {
        title
      }
      nation {
        title
        icons {
          tiny
        }
      }
    }
  }
`;

/**
 * __useVehicleQuery__
 *
 * To run a query within a React component, call `useVehicleQuery` and pass it any options that fit your needs.
 * When your component renders, `useVehicleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVehicleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVehicleQuery(
  baseOptions: Apollo.QueryHookOptions<VehicleQuery, VehicleQueryVariables> &
    ({ variables: VehicleQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<VehicleQuery, VehicleQueryVariables>(VehicleDocument, options);
}
export function useVehicleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<VehicleQuery, VehicleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<VehicleQuery, VehicleQueryVariables>(VehicleDocument, options);
}
export function useVehicleSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<VehicleQuery, VehicleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<VehicleQuery, VehicleQueryVariables>(VehicleDocument, options);
}
export type VehicleQueryHookResult = ReturnType<typeof useVehicleQuery>;
export type VehicleLazyQueryHookResult = ReturnType<typeof useVehicleLazyQuery>;
export type VehicleSuspenseQueryHookResult = ReturnType<typeof useVehicleSuspenseQuery>;
export type VehicleQueryResult = Apollo.QueryResult<VehicleQuery, VehicleQueryVariables>;

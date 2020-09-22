# Match
Model: League of Legends

## `Match` <Badge text="Pyot Core" vertical="middle"/>
>`id: int = None` <Badge text="param" type="warning" vertical="middle"/>
>
>`platform: str = None` <Badge text="param" type="warning" vertical="middle"/>

>`"match_v4_match": ["id"]` <Badge text="endpoint" type="error" vertical="middle"/>

>`id: int`
>
>`type: str`
>
>`mode: str`
>
>`version: str`
>
>`map_id: int`
>
>`season_id: int`
>
>`queue_id: int`
>
>`creation: datetime`
>
>`duration: timedelta`
>
>`platform: str`
>
>`teams: List[MatchTeamData]`
>
>`blue_team: MatchTeamData`
>
>`red_team: MatchTeamData`

## `Timeline` <Badge text="Pyot Core" vertical="middle"/>
>`id: int = None` <Badge text="param" type="warning" vertical="middle"/>
>
>`platform: str = None` <Badge text="param" type="warning" vertical="middle"/>

>`"match_v4_timeline": ["id"]` <Badge text="endpoint" type="error" vertical="middle"/>

>`frames: List[MatchFrameMinuteData]`
>
>`events: List[MatchEventMinuteData]`
>
>`interval: timedelta`

## `MatchTimeline` <Badge text="Pyot Core" vertical="middle"/>
:::tip INFO
This Pyot Core Object is a Unified version of `Match` and `Timeline`, the timeline objects for each participants is under each participant's timeline `events` and `frames`. Some events are not included because it belongs to the general team based.
:::
>`id: int = None` <Badge text="param" type="warning" vertical="middle"/>
>
>`platform: str = None` <Badge text="param" type="warning" vertical="middle"/>

>`"match_v4_match": ["id"]` <Badge text="endpoint" type="error" vertical="middle"/>
>
>`"match_v4_timeline": ["id"]` <Badge text="endpoint" type="error" vertical="middle"/>

> **_All variables and attributes are the same as Match, please reference above instead_**

## `MatchHistory` <Badge text="Pyot Core" vertical="middle"/> <Badge text="Iterable" type="warning" vertical="middle"/>
>`account_id: str = None` <Badge text="param" type="warning" vertical="middle"/>
>
>`platform: str = None` <Badge text="param" type="warning" vertical="middle"/>

>`champion_ids: List[int] = None` <Badge text="query" type="error" vertical="middle"/>
>
>`queue_ids: List[int] = None` <Badge text="query" type="error" vertical="middle"/>
>
>`season_ids: List[int] = None` <Badge text="query" type="error" vertical="middle"/>
>
>`end_time: int = None` <Badge text="query" type="error" vertical="middle"/>
>
>`begin_time: int = None` <Badge text="query" type="error" vertical="middle"/>
>
>`end_index: int = None` <Badge text="query" type="error" vertical="middle"/>
>
>`begin_index: int = None` <Badge text="query" type="error" vertical="middle"/>

>`"match_v4_matchlist": ["account_id"]` <Badge text="endpoint" type="error" vertical="middle"/>

>`matches: List[MatchHistoryMatchData]` <Badge text="Iterator" type="warning" vertical="middle"/>
>
>`start_index: int`
>
>`end_index: int`
>
>`total_games: int`
>
>`account_id: str`

>`summoner -> "Summoner"` <Badge text="bridge" type="error" vertical="middle"/>

## `MatchFrameMinuteData` <Badge text="Pyot Static" vertical="middle"/> <Badge text="Iterable" type="warning" vertical="middle"/>
>`frame: List[MatchFrameData]` <Badge text="Iterator" type="warning" vertical="middle"/>

## `MatchEventMinuteData` <Badge text="Pyot Static" vertical="middle"/> <Badge text="Iterable" type="warning" vertical="middle"/>
>`frame: List[MatchEventData]` <Badge text="Iterator" type="warning" vertical="middle"/>

## `MatchHistoryMatchData` <Badge text="Pyot Static" vertical="middle"/> 
>`platform: str`
>
>`id: int`
>
>`champion_id: int`
>
>`queue_id: int`
>
>`season_id: int`
>
>`creation: datetime`
>
>`role: str`
>
>`lane: str`

>`champion -> "Champion"` <Badge text="bridge" type="error" vertical="middle"/>
>
>`meraki_champion -> "MerakiChampion"` <Badge text="bridge" type="error" vertical="middle"/>
>
>`match -> "Match"` <Badge text="bridge" type="error" vertical="middle"/>
>
>`match_timeline -> "MatchTimeline"` <Badge text="bridge" type="error" vertical="middle"/>
>
>`timeline -> "Timeline"` <Badge text="bridge" type="error" vertical="middle"/>

## `MatchTeamData` <Badge text="Pyot Static" vertical="middle"/>
>`team_id: int`
>
>`win: bool`
>
>`first_blood: bool`
>
>`first_tower: bool`
>
>`first_inhibitor: bool`
>
>`first_baron: bool`
>
>`first_dragon: bool`
>
>`first_rift_herald: bool`
>
>`tower_kills: int`
>
>`inhibitor_kills: int`
>
>`baron_kills: int`
>
>`dragon_kills: int`
>
>`vilemaw_kills: int`
>
>`rift_herald_kills: int`
>
>`dominion_victory_score: int`
>
>`bans: List[MatchBanData]`
>
>`participants: List[MatchParticipantData]`

## `MatchParticipantData` <Badge text="Pyot Static" vertical="middle"/>
>`id: int`
>
>`team_id: int`
>
>`champion_id: int`
>
>`spell_ids: List[int]`
>
>`stats: MatchParticipantStatData`
>
>`timeline: MatchParticipantTimelineData`

>`champion -> "Champion"` <Badge text="bridge" type="error" vertical="middle"/>
>
>`meraki_champion -> "MerakiChampion"` <Badge text="bridge" type="error" vertical="middle"/>
>
>`spells -> List["Spell"]` <Badge text="bridge" type="error" vertical="middle"/>

## `MatchParticipantStatData` <Badge text="Pyot Static" vertical="middle"/>
>`participant_id: int`
>
>`win: bool`
>
>`dominion_scores: List[int]`
>
>`spell_ids: List[int]`
>
>`item_ids: List[int]`
>
>`rune_ids: List[int]`
>
>`stat_rune_ids: List[int]`
>
>`rune_vars: List[List[int]]`
>
>`rune_style: int`
>
>`rune_sub_style: int`
>
>`kills: int`
>
>`deaths: int`
>
>`assists: int`
>
>`largest_killing_spree: int`
>
>`largest_multi_kill: int`
>
>`killing_sprees: int`
>
>`longest_time_spent_living: int`
>
>`double_kills: int`
>
>`triple_kills: int`
>
>`quadra_kills: int`
>
>`penta_kills: int`
>
>`unreal_kills: int`
>
>`total_damage_dealt: int`
>
>`magic_damage_dealt: int`
>
>`physical_damage_dealt: int`
>
>`true_damage_dealt: int`
>
>`largest_critical_strike: int`
>
>`total_damage_dealt_to_champions: int`
>
>`magic_damage_dealt_to_champions: int`
>
>`physical_damage_dealt_to_champions: int`
>
>`true_damage_dealt_to_champions: int`
>
>`total_heal: int`
>
>`total_units_healed: int`
>
>`damage_self_mitigated: int`
>
>`damage_dealt_to_objectives: int`
>
>`damage_dealt_to_turrets: int`
>
>`vision_score: int`
>
>`time_ccing_others: int`
>
>`total_damage_taken: int`
>
>`magical_damage_taken: int`
>
>`physical_damage_taken: int`
>
>`true_damage_taken: int`
>
>`gold_earned: int`
>
>`gold_spent: int`
>
>`turret_kills: int`
>
>`inhibitor_kills: int`
>
>`total_minions_killed: int`
>
>`neutral_minions_killed: int`
>
>`neutral_minions_killed_team_jungle: int`
>
>`neutral_minions_killed_enemy_jungle: int`
>
>`total_time_crowd_control_dealt: int`
>
>`champ_level: int`
>
>`vision_wards_bought_in_game: int`
>
>`sight_wards_bought_in_game: int`
>
>`wards_placed: int`
>
>`wards_killed: int`
>
>`first_blood_kill: bool`
>
>`first_blood_assist: bool`
>
>`first_tower_kill: bool`
>
>`first_tower_assist: bool`
>
>`first_inhibitor_kill: bool`
>
>`first_inhibitor_assist: bool`
>
>`combat_player_score: int`
>
>`objective_player_score: int`
>
>`total_player_score: int`
>
>`total_score_rank: int`

>`items -> List["Item"]` <Badge text="bridge" type="error" vertical="middle"/>
>
>`meraki_items -> List["MerakiItem"]` <Badge text="bridge" type="error" vertical="middle"/>
>
>`runes -> List["Rune"]` <Badge text="bridge" type="error" vertical="middle"/>
>
>`stat_runes -> List["Rune"]` <Badge text="bridge" type="error" vertical="middle"/>
>
>`spells -> List["Spell"]` <Badge text="bridge" type="error" vertical="middle"/>

## `MatchParticipantTimelineData` <Badge text="Pyot Static" vertical="middle"/>
>`participant_id: int`
>
>`creeps_per_min_deltas: List[float]`
>
>`xp_per_min_deltas: List[float]`
>
>`gold_per_min_deltas: List[float]`
>
>`cs_diff_per_min_deltas: List[float]`
>
>`xp_diff_per_min_deltas: List[float]`
>
>`damage_taken_per_min_deltas: List[float]`
>
>`damage_taken_diff_per_min_deltas: List[float]`
>
>`role: str`
>
>`lane: str`
> :::warning
> `frames` and `events` are only available for `MatchTimeline` Objects.
> :::
>`frames: List[MatchFrameData]`
>
>`events: List[MatchEventData]`

## `MatchEventData` <Badge text="Pyot Static" vertical="middle"/>
>:::warning
>Not every field is filled, different event type yields different available fields. Getting an attr from a blank field will raise `AttributeError`.
>:::
>`lane_type: str`
>
>`skill_slot: int`
>
>`ascended_type: str`
>
>`creator_id: int`
>
>`after_id: int`
>
>`event_type: str`
>
>`type: str`
>
>`level_up_type: str`
>
>`ward_type: str`
>
>`participant_id: int`
>
>`tower_type: str`
>
>`item_id: int`
>
>`before_id: int`
>
>`point_captured: str`
>
>`monster_type: str`
>
>`monster_sub_type: str`
>
>`team_id: int`
>
>`position: MatchPositionData`
>
>`killer_id: int`
>
>`timestamp: timedelta`
>
>`assisting_participant_ids: List[int]`
>
>`building_type: str`
>
>`victim_id: int`

>`after_item -> "Item"` <Badge text="bridge" type="error" vertical="middle"/>
>
>`item -> "Item"` <Badge text="bridge" type="error" vertical="middle"/>
>
>`before_item -> "Item"` <Badge text="bridge" type="error" vertical="middle"/>
>
>`meraki_after_item -> "MerakiItem"` <Badge text="bridge" type="error" vertical="middle"/>
>
>`meraki_item -> "MerakiItem"` <Badge text="bridge" type="error" vertical="middle"/>
>
>`meraki_before_item -> "MerakiItem"` <Badge text="bridge" type="error" vertical="middle"/>

## `MatchFrameData` <Badge text="Pyot Static" vertical="middle"/>
>`participant_id: int`
>
>`minions_killed: int`
>
>`team_score: int`
>
>`dominion_score: int`
>
>`total_gold: int`
>
>`level: int`
>
>`xp: int`
>
>`current_gold: int`
>
>`position: MatchPositionData`
>
>`jungle_minions_killed: int`

## `MatchBanData` <Badge text="Pyot Static" vertical="middle"/>
>`champion_id: int`
>
>`pick_turn: int`

>`champion -> "Champion"` <Badge text="bridge" type="error" vertical="middle"/>
>`meraki_champion -> "MerakiChampion"` <Badge text="bridge" type="error" vertical="middle"/>

## `MatchPositionData` <Badge text="Pyot Static" vertical="middle"/>
>`x: int`
>
>`y: int`



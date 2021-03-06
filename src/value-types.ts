
type NewLine = "\n";
const NewLine = "\n" as NewLine;

type ListType = "ordered" | "bullet";
const ListType = {
    Ordered: 'ordered' as ListType,
    Bullet: 'bullet' as ListType
}

type ScriptType = "sub" | "super";
const ScriptType = {
    Sub: "sub" as ScriptType,
    Super: "super" as ScriptType
}

type DirectionType = "rtl";
const DirectionType = {
    Rtl: "rtl" as DirectionType
}

type AlignType = "center" | "right";
const AlignType = {
    Center: "center" as AlignType,
    Right: "right" as AlignType
}

type DataType = "text" | "image" | "video" | "formula";
const DataType = {
    Image: "image" as DataType,
    Video: "video" as DataType,
    Formula: "formula" as DataType,
    Text: "text" as DataType
};

type GroupType = "block" | "inline-group" | "list" | "video";
const GroupType = {
    Block: 'block' as GroupType,
    InlineGroup: 'inline-group' as GroupType,
    List: 'list' as GroupType,
    Video: 'video' as GroupType
};

type MentionType = "name" | "target" | "slug" | "class" | 'avatar' | 'id' | 'mention-end-point';
const MentionType = {
    Name: 'name' as MentionType,
    Target: 'target' as MentionType,
    Slug: 'slug' as MentionType,
    Class: 'class' as MentionType,
    Avatar: 'avatar' as MentionType,
    Id: 'id' as MentionType,
    EndPoint: 'end-point' as MentionType
};

export { NewLine, ListType, ScriptType, DirectionType, AlignType, DataType, GroupType, MentionType };

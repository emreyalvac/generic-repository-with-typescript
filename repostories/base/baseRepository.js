abstract;
var BaseRepository = (function () {
    function BaseRepository(db, collectionName) {
        this.readonly = _collection;
        // @ts-ignore
        this.async = create(item, T);
        this._collection = db.collection(collectionName);
    }
    BaseRepository.prototype.Promise = function () {
        var result = await;
        this._collection.insert(item);
        return !!result.result.ok;
    };
    BaseRepository.prototype.update = function (id, item) {
        throw new Error('Method not implemented.');
    };
    BaseRepository.prototype.delete = function (id) {
        throw new Error('Method not implemented.');
    };
    BaseRepository.prototype.find = function (item) {
        throw new Error('Method not implemented.');
    };
    BaseRepository.prototype.findOne = function (id) {
        throw new Error('Method not implemented.');
    };
    return BaseRepository;
})();
